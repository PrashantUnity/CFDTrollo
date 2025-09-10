console.log('🚀 Loading dragDrop.js with SortableJS...');

// Simple SortableJS implementation
window.dragDrop = {
    // State
    dotNetReference: null,
    sortableInstances: new Map(),

    // Initialize
    init: function(dotNetReference) {
        console.log('✅ Initializing dragDrop with SortableJS');
        this.dotNetReference = dotNetReference;
        this._injectStyles();
    },

    // Enable dragging on a list (for cards)
    enableCardDragging: function(listElement, listId) {
        console.log('🔧 Enabling card dragging for list:', listId);
        
        if (!listElement) {
            console.error('❌ List element is null');
            return;
        }

        // Create Sortable instance for cards
        const sortable = Sortable.create(listElement, {
            group: 'cards',
            animation: 150,
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            dragClass: 'sortable-drag',
            handle: '.card-drag-handle',
            onStart: (evt) => {
                console.log('🚀 Card drag start:', evt.item.dataset.cardId);
            },
            onEnd: (evt) => {
                console.log('🏁 Card drag end:', {
                    item: evt.item.dataset.cardId,
                    from: evt.from.dataset.listId,
                    to: evt.to.dataset.listId,
                    newIndex: evt.newIndex,
                    oldIndex: evt.oldIndex
                });

                // Call C# method to handle the drop
                if (evt.from !== evt.to) {
                    // Moved to different list
                    this.dotNetReference.invokeMethodAsync('HandleCardMove', 
                        evt.item.dataset.cardId,
                        evt.from.dataset.listId,
                        evt.to.dataset.listId,
                        evt.newIndex);
                } else {
                    // Reordered within same list
                    this.dotNetReference.invokeMethodAsync('HandleCardReorder', 
                        evt.item.dataset.cardId,
                        evt.from.dataset.listId,
                        evt.oldIndex,
                        evt.newIndex);
                }
            }
        });

        this.sortableInstances.set(listId, sortable);
        console.log('✅ Card dragging enabled for list:', listId);
    },

    // Enable dragging on the board (for lists)
    enableListDragging: function(boardElement) {
        console.log('🔧 Enabling list dragging for board');
        
        if (!boardElement) {
            console.error('❌ Board element is null');
            return;
        }

        // Create Sortable instance for lists
        const sortable = Sortable.create(boardElement, {
            group: 'lists',
            animation: 150,
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            dragClass: 'sortable-drag',
            handle: '.list-drag-handle',
            onStart: (evt) => {
                console.log('🚀 List drag start:', evt.item.dataset.listId);
            },
            onEnd: (evt) => {
                console.log('🏁 List drag end:', {
                    item: evt.item.dataset.listId,
                    newIndex: evt.newIndex,
                    oldIndex: evt.oldIndex
                });

                // Call C# method to handle the reorder
                this.dotNetReference.invokeMethodAsync('HandleListReorder', 
                    evt.item.dataset.listId,
                    evt.oldIndex,
                    evt.newIndex);
            }
        });

        this.sortableInstances.set('board', sortable);
        console.log('✅ List dragging enabled for board');
    },

    // Destroy a sortable instance
    destroy: function(elementId) {
        const instance = this.sortableInstances.get(elementId);
        if (instance) {
            instance.destroy();
            this.sortableInstances.delete(elementId);
            console.log('✅ Destroyed sortable instance:', elementId);
        }
    },

    // Destroy all sortable instances
    destroyAll: function() {
        this.sortableInstances.forEach((instance, id) => {
            instance.destroy();
            console.log('✅ Destroyed sortable instance:', id);
        });
        this.sortableInstances.clear();
    },

    // Inject CSS styles
    _injectStyles: function() {
        const style = document.createElement('style');
        style.textContent = `
            .sortable-ghost {
                opacity: 0.4;
                background: #f0f0f0;
                border: 2px dashed #ccc;
            }
            
            .sortable-chosen {
                transform: rotate(5deg);
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }
            
            .sortable-drag {
                transform: rotate(5deg);
                box-shadow: 0 8px 16px rgba(0,0,0,0.3);
            }
            
            .card-drag-handle {
                cursor: grab;
            }
            
            .card-drag-handle:active {
                cursor: grabbing;
            }
            
            .list-drag-handle {
                cursor: grab;
            }
            
            .list-drag-handle:active {
                cursor: grabbing;
            }
        `;
        document.head.appendChild(style);
    }
};

console.log('✅ dragDrop.js with SortableJS loaded successfully!');