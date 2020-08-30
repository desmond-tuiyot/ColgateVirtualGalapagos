import React from 'react'
import { ItemTypes } from "../../utils/items"
import { useDrag } from 'react-dnd'

const DndDraggables = props => {

        const [{isDragging}, drag] = useDrag({
            item: {type: ItemTypes.VOLCANO},
            // collect: monitor => ({
            //     isDragging: !!monitor.isDragging()
            // }),
            begin: () => props.function(),
            canDrag: () => {
                   return props.Completed
                },
        });
   
if (props.div) {
    return (
            <div ref={drag} style={props.secret? {visibility: "hidden"} : {}} className={props.Completed? props.readyClass : props.class}>{props.text}</div>
    )}
}

export default DndDraggables
