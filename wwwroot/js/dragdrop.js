window.dragDrop = {
    init: function (dotNetReference) {
        this.dotNetReference = dotNetReference;
        this.draggedElement = null;
        this.draggedData = null;
        this.dragOverElement = null;
    },

    handleCardDragStart: function (element, cardId, listTitle, cardIndex) {
        this.draggedData = `${cardId}|${listTitle}|${cardIndex}`;
        
        // Add event listeners to the element
        element.addEventListener('dragstart', (event) => {
            this.draggedElement = event.target;
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/html', event.target.outerHTML);
            
            // Add smooth visual feedback
            event.target.style.opacity = '0.6';
            event.target.style.transition = 'all 0.2s ease';
            event.target.classList.add('dragging');
            
            // Create a custom drag image
            const dragImage = event.target.cloneNode(true);
            dragImage.style.opacity = '0.8';
            dragImage.style.position = 'absolute';
            dragImage.style.top = '-1000px';
            dragImage.style.pointerEvents = 'none';
            document.body.appendChild(dragImage);
            event.dataTransfer.setDragImage(dragImage, 0, 0);
            
            // Clean up the drag image after a short delay
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
                this.draggedElement.classList.remove('dragging');
            }
            this.draggedElement = null;
            this.draggedData = null;
        });
    },

    handleCardDragOver: function (element) {
        element.addEventListener('dragover', (event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
            
            // Add visual feedback to drop zones
            element.classList.add('drag-over');
            this.dragOverElement = element;
            
            // Add smooth transition
            element.style.transition = 'all 0.2s ease';
            
            // Show drop indicator
            this.showDropIndicator(element, event);
        });
    },
    
    showDropIndicator: function (element, event) {
        // Remove existing indicators
        const existingIndicator = element.querySelector('.drop-indicator');
        if (existingIndicator) {
            existingIndicator.remove();
        }
        
        // Calculate position for drop indicator
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

    handleCardDragLeave: function (element) {
        element.addEventListener('dragleave', (event) => {
            // Only remove if we're actually leaving the element
            if (!element.contains(event.relatedTarget)) {
                element.classList.remove('drag-over');
                this.dragOverElement = null;
                
                // Remove drop indicator
                const indicator = element.querySelector('.drop-indicator');
                if (indicator) {
                    indicator.remove();
                }
            }
        });
    },

    handleCardDrop: function (element, targetListId) {
        element.addEventListener('drop', (event) => {
            event.preventDefault();
            
            // Remove visual feedback
            element.classList.remove('drag-over');
            this.dragOverElement = null;
            
            // Remove drop indicator
            const indicator = element.querySelector('.drop-indicator');
            if (indicator) {
                indicator.remove();
            }
            
            if (this.draggedData && this.dotNetReference) {
                // Calculate drop position within the list more accurately
                const rect = element.getBoundingClientRect();
                const y = event.clientY - rect.top;
                
                // Get all card elements in the list
                const cards = element.querySelectorAll('.card-component');
                let dropIndex = cards.length; // Default to end
                
                // Find the correct position based on mouse Y position
                for (let i = 0; i < cards.length; i++) {
                    const cardRect = cards[i].getBoundingClientRect();
                    const cardTop = cardRect.top - rect.top;
                    const cardCenter = cardTop + (cardRect.height / 2);
                    
                    if (y < cardCenter) {
                        dropIndex = i;
                        break;
                    }
                }
                
                // Notify Blazor about the drop with position
                this.dotNetReference.invokeMethodAsync('HandleCardDrop', this.draggedData, targetListId, dropIndex);
            }
        });
    }
};

// Add CSS for drag over effects
const style = document.createElement('style');
style.textContent = `
    .drag-over {
        background-color: rgba(59, 130, 246, 0.1) !important;
        border: 2px dashed #3b82f6 !important;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
    }
    
    .dragging {
        opacity: 0.6;
        transition: all 0.2s ease;
        z-index: 1000;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    .card-component {
        transition: all 0.2s ease;
    }
    
    .card-component:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .list-component {
        transition: all 0.2s ease;
    }
    
    .list-component.drag-over {
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
    }
`;
document.head.appendChild(style);