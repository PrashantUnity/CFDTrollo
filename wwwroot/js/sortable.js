window.sortableManager = {
    sortables: new Map(),
    dotNetReference: null,

    init: function (dotNetReference) {
        this.dotNetReference = dotNetReference;
    },

    createSortable: function (elementId, listId, options = {}) {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`Element with id ${elementId} not found`);
            return;
        }

        // Default options for Trello-like behavior
        const defaultOptions = {
            group: 'cards', // Allow dragging between lists
            animation: 200,
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            dragClass: 'sortable-drag',
            forceFallback: true, // Better mobile support
            fallbackClass: 'sortable-fallback',
            fallbackOnBody: true,
            swapThreshold: 0.65,
            invertSwap: false,
            direction: 'vertical',
            onStart: (evt) => {
                this.onDragStart(evt, listId);
            },
            onEnd: (evt) => {
                this.onDragEnd(evt, listId);
            },
            onAdd: (evt) => {
                this.onCardAdd(evt, listId);
            },
            onUpdate: (evt) => {
                this.onCardUpdate(evt, listId);
            },
            onRemove: (evt) => {
                this.onCardRemove(evt, listId);
            }
        };

        // Merge with custom options
        const sortableOptions = { ...defaultOptions, ...options };

        // Create sortable instance
        const sortable = Sortable.create(element, sortableOptions);
        this.sortables.set(elementId, sortable);

        return sortable;
    },

    createListSortable: function (elementId, options = {}) {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`Element with id ${elementId} not found`);
            return;
        }

        // Default options for list dragging
        const defaultOptions = {
            group: 'lists', // Allow dragging between lists
            animation: 200,
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            dragClass: 'sortable-drag',
            forceFallback: true,
            fallbackClass: 'sortable-fallback',
            fallbackOnBody: true,
            swapThreshold: 0.65,
            invertSwap: false,
            direction: 'horizontal',
            onStart: (evt) => {
                this.onListDragStart(evt);
            },
            onEnd: (evt) => {
                this.onListDragEnd(evt);
            },
            onUpdate: (evt) => {
                this.onListUpdate(evt);
            }
        };

        // Merge with custom options
        const sortableOptions = { ...defaultOptions, ...options };

        // Create sortable instance
        const sortable = Sortable.create(element, sortableOptions);
        this.sortables.set(elementId, sortable);

        return sortable;
    },

    destroySortable: function (elementId) {
        const sortable = this.sortables.get(elementId);
        if (sortable) {
            sortable.destroy();
            this.sortables.delete(elementId);
        }
    },

    onDragStart: function (evt, listId) {
        const cardId = evt.item.dataset.cardId;
        const cardIndex = evt.oldIndex;
        
        // Store drag data
        this.dragData = {
            cardId: cardId,
            sourceListId: listId,
            cardIndex: cardIndex
        };

        // Add visual feedback
        evt.item.classList.add('dragging');
    },

    onDragEnd: function (evt, listId) {
        // Remove visual feedback
        evt.item.classList.remove('dragging');
        
        // Clear drag data
        this.dragData = null;
    },

    onCardAdd: function (evt, targetListId) {
        if (!this.dragData || !this.dotNetReference) return;

        const cardId = evt.item.dataset.cardId;
        const newIndex = evt.newIndex;
        const sourceListId = this.dragData.sourceListId;

        // Notify Blazor about the card move
        this.dotNetReference.invokeMethodAsync('HandleCardMove', {
            cardId: cardId,
            sourceListId: sourceListId,
            targetListId: targetListId,
            sourceIndex: this.dragData.cardIndex,
            targetIndex: newIndex
        });
    },

    onCardUpdate: function (evt, listId) {
        if (!this.dragData || !this.dotNetReference) return;

        const cardId = evt.item.dataset.cardId;
        const oldIndex = evt.oldIndex;
        const newIndex = evt.newIndex;

        // Notify Blazor about the card reorder
        this.dotNetReference.invokeMethodAsync('HandleCardReorder', {
            cardId: cardId,
            listId: listId,
            oldIndex: oldIndex,
            newIndex: newIndex
        });
    },

    onCardRemove: function (evt, listId) {
        // This is handled by onCardAdd in the target list
    },

    onListDragStart: function (evt) {
        const listId = evt.item.dataset.listId;
        const listIndex = evt.oldIndex;
        
        // Store drag data
        this.listDragData = {
            listId: listId,
            listIndex: listIndex
        };

        // Add visual feedback
        evt.item.classList.add('dragging');
    },

    onListDragEnd: function (evt) {
        // Remove visual feedback
        evt.item.classList.remove('dragging');
        
        // Clear drag data
        this.listDragData = null;
    },

    onListUpdate: function (evt) {
        if (!this.listDragData || !this.dotNetReference) return;

        const listId = evt.item.dataset.listId;
        const oldIndex = evt.oldIndex;
        const newIndex = evt.newIndex;

        // Notify Blazor about the list reorder
        this.dotNetReference.invokeMethodAsync('HandleListReorder', {
            listId: listId,
            oldIndex: oldIndex,
            newIndex: newIndex
        });
    },

    // Method to refresh sortable after DOM changes
    refreshSortable: function (elementId) {
        const sortable = this.sortables.get(elementId);
        if (sortable) {
            sortable.option('disabled', false);
        }
    },

    // Method to disable/enable sortable
    setSortableEnabled: function (elementId, enabled) {
        const sortable = this.sortables.get(elementId);
        if (sortable) {
            sortable.option('disabled', !enabled);
        }
    }
};

// Add CSS for SortableJS
const style = document.createElement('style');
style.textContent = `
    .sortable-ghost {
        opacity: 0.4;
        background: #f0f0f0;
        border: 2px dashed #ccc;
    }
    
    .sortable-chosen {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    .sortable-drag {
        opacity: 0.8;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }
    
    .sortable-fallback {
        display: none;
    }
    
    .dragging {
        opacity: 0.6;
        transform: rotate(3deg) scale(1.05);
        transition: all 0.2s ease;
        z-index: 1000;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    .card-component {
        transition: all 0.2s ease;
        cursor: grab;
    }
    
    .card-component:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .card-component:active {
        cursor: grabbing;
    }
    
    .list-component {
        transition: all 0.2s ease;
    }
    
    .list-component.sortable-drag-over {
        background-color: rgba(59, 130, 246, 0.1);
        border: 2px dashed #3b82f6;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
    }
`;
document.head.appendChild(style);
