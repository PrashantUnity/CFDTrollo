window.dragDrop = {
    init: function (dotNetReference) {
        this.dotNetReference = dotNetReference;
        this.draggedElement = null;
        this.draggedData = null;
        this.dragOverElement = null;
        this.dropZones = new Map();
    },

    // Initialize card dragging
    handleCardDragStart: function (element, cardId, listTitle, cardIndex) {
        this.draggedData = {
            cardId: cardId,
            listTitle: listTitle,
            cardIndex: cardIndex
        };
        
        element.addEventListener('dragstart', (event) => {
            this.draggedElement = event.target;
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/plain', JSON.stringify(this.draggedData));
            
            // Visual feedback
            event.target.style.opacity = '0.6';
            event.target.style.transform = 'rotate(3deg) scale(1.05)';
            event.target.style.transition = 'all 0.2s ease';
            event.target.classList.add('dragging');
            
            // Create custom drag image
            const dragImage = event.target.cloneNode(true);
            dragImage.style.opacity = '0.8';
            dragImage.style.position = 'absolute';
            dragImage.style.top = '-1000px';
            dragImage.style.pointerEvents = 'none';
            dragImage.style.zIndex = '10000';
            document.body.appendChild(dragImage);
            event.dataTransfer.setDragImage(dragImage, 0, 0);
            
            // Clean up drag image
            setTimeout(() => {
                if (document.body.contains(dragImage)) {
                    document.body.removeChild(dragImage);
                }
            }, 0);
        });

        element.addEventListener('dragend', (event) => {
            // Reset visual feedback
            if (this.draggedElement) {
                this.draggedElement.style.opacity = '1';
                this.draggedElement.style.transform = 'none';
                this.draggedElement.classList.remove('dragging');
            }
            this.draggedElement = null;
            this.draggedData = null;
        });
    },

    // Initialize list dragging
    handleListDragStart: function (element, listId, listIndex) {
        this.listDragData = {
            listId: listId,
            listIndex: listIndex
        };
        
        element.addEventListener('dragstart', (event) => {
            this.draggedElement = event.target;
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/plain', JSON.stringify(this.listDragData));
            
            // Visual feedback
            event.target.style.opacity = '0.8';
            event.target.style.transform = 'rotate(2deg) scale(1.05)';
            event.target.style.transition = 'all 0.2s ease';
            event.target.classList.add('dragging');
        });

        element.addEventListener('dragend', (event) => {
            // Reset visual feedback
            if (this.draggedElement) {
                this.draggedElement.style.opacity = '1';
                this.draggedElement.style.transform = 'none';
                this.draggedElement.classList.remove('dragging');
            }
            this.draggedElement = null;
            this.listDragData = null;
        });
    },

    // Initialize drop zone for cards
    handleCardDropZone: function (element, listId) {
        this.dropZones.set(listId, element);
        
        element.addEventListener('dragover', (event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
            
            // Visual feedback
            element.classList.add('drag-over');
            this.dragOverElement = element;
            
            // Show drop indicator
            this.showDropIndicator(element, event);
        });

        element.addEventListener('dragleave', (event) => {
            if (!element.contains(event.relatedTarget)) {
                element.classList.remove('drag-over');
                this.dragOverElement = null;
                this.removeDropIndicator(element);
            }
        });

        element.addEventListener('drop', (event) => {
            event.preventDefault();
            
            // Remove visual feedback
            element.classList.remove('drag-over');
            this.dragOverElement = null;
            this.removeDropIndicator(element);
            
            try {
                const data = JSON.parse(event.dataTransfer.getData('text/plain'));
                
                if (data.cardId) {
                    // Card drop
                    const dropIndex = this.calculateDropIndex(element, event);
                    this.dotNetReference.invokeMethodAsync('HandleCardDrop', data.cardId, data.listTitle, listId, dropIndex);
                } else if (data.listId) {
                    // List drop
                    const dropIndex = this.calculateListDropIndex(element, event);
                    this.dotNetReference.invokeMethodAsync('HandleListDrop', data.listId, dropIndex);
                }
            } catch (error) {
                console.error('Error handling drop:', error);
            }
        });
    },

    // Initialize drop zone for lists
    handleListDropZone: function (element) {
        element.addEventListener('dragover', (event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
            
            // Visual feedback
            element.classList.add('drag-over');
        });

        element.addEventListener('dragleave', (event) => {
            if (!element.contains(event.relatedTarget)) {
                element.classList.remove('drag-over');
            }
        });

        element.addEventListener('drop', (event) => {
            event.preventDefault();
            
            // Remove visual feedback
            element.classList.remove('drag-over');
            
            try {
                const data = JSON.parse(event.dataTransfer.getData('text/plain'));
                
                if (data.listId) {
                    const dropIndex = this.calculateListDropIndex(element, event);
                    this.dotNetReference.invokeMethodAsync('HandleListDrop', data.listId, dropIndex);
                }
            } catch (error) {
                console.error('Error handling list drop:', error);
            }
        });
    },

    // Show drop indicator
    showDropIndicator: function (element, event) {
        this.removeDropIndicator(element);
        
        const rect = element.getBoundingClientRect();
        const y = event.clientY - rect.top;
        const cards = element.querySelectorAll('.card-component');
        
        let insertAfter = null;
        for (let i = 0; i < cards.length; i++) {
            const cardRect = cards[i].getBoundingClientRect();
            const cardTop = cardRect.top - rect.top;
            const cardCenter = cardTop + (cardRect.height / 2);
            
            if (y < cardCenter) {
                insertAfter = cards[i];
                break;
            }
        }
        
        // Create drop indicator
        const indicator = document.createElement('div');
        indicator.className = 'drop-indicator';
        indicator.style.cssText = `
            height: 2px;
            background: #3b82f6;
            margin: 4px 0;
            border-radius: 1px;
            opacity: 0.8;
            transition: all 0.2s ease;
        `;
        
        // Insert the indicator
        if (insertAfter) {
            insertAfter.parentNode.insertBefore(indicator, insertAfter);
        } else {
            element.appendChild(indicator);
        }
    },

    // Remove drop indicator
    removeDropIndicator: function (element) {
        const indicator = element.querySelector('.drop-indicator');
        if (indicator) {
            indicator.remove();
        }
    },

    // Calculate drop index for cards
    calculateDropIndex: function (element, event) {
        const rect = element.getBoundingClientRect();
        const y = event.clientY - rect.top;
        const cards = element.querySelectorAll('.card-component');
        
        for (let i = 0; i < cards.length; i++) {
            const cardRect = cards[i].getBoundingClientRect();
            const cardTop = cardRect.top - rect.top;
            const cardCenter = cardTop + (cardRect.height / 2);
            
            if (y < cardCenter) {
                return i;
            }
        }
        
        return cards.length; // Default to end
    },

    // Calculate drop index for lists
    calculateListDropIndex: function (element, event) {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const lists = element.querySelectorAll('.list-component');
        
        for (let i = 0; i < lists.length; i++) {
            const listRect = lists[i].getBoundingClientRect();
            const listLeft = listRect.left - rect.left;
            const listCenter = listLeft + (listRect.width / 2);
            
            if (x < listCenter) {
                return i;
            }
        }
        
        return lists.length; // Default to end
    },

    // Enable dragging for an element
    enableDragging: function (element, type, id, title, index) {
        element.draggable = true;
        
        if (type === 'card') {
            this.handleCardDragStart(element, id, title, index);
        } else if (type === 'list') {
            this.handleListDragStart(element, id, index);
        }
    },

    // Enable drop zone for an element
    enableDropZone: function (element, type, id) {
        if (type === 'card') {
            this.handleCardDropZone(element, id);
        } else if (type === 'list') {
            this.handleListDropZone(element);
        }
    }
};

// Add CSS for drag and drop
const style = document.createElement('style');
style.textContent = `
    .dragging {
        opacity: 0.6;
        transform: rotate(3deg) scale(1.05);
        transition: all 0.2s ease;
        z-index: 1000;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    .drag-over {
        background-color: rgba(59, 130, 246, 0.1) !important;
        border: 2px dashed #3b82f6 !important;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
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
        cursor: grab;
    }
    
    .list-component:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .list-component:active {
        cursor: grabbing;
    }
    
    .drop-indicator {
        height: 2px;
        background: #3b82f6;
        margin: 4px 0;
        border-radius: 1px;
        opacity: 0.8;
        transition: all 0.2s ease;
    }
`;
document.head.appendChild(style);