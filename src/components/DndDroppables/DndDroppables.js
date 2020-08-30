import React, { useContext, Fragment } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../utils/items'

const DndDroppables = props => {

    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.VOLCANO,
        drop: () => {
           if (props.progressIndex >= 5) {
               props.unlock();
               props.finished();
           }
           else if (props.dragIndex == props.dropIndex) {
               props.unlock()
           }
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
        }),
    });
    if (props.div) {
        return (
            <div ref={drop} style={isOver? {opacity: "0.5"} : {}} className={props.class}>{props.text}</div>
        )
    }
}

export default DndDroppables
