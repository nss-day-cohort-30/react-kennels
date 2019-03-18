import React from "react"
import { Route } from "react-router-dom"
import Login from "./Login";

const GenericList = ( {data, ChildComponent} ) => {
    return (
        data.map(item => {
            return <ChildComponent item={item} />
        })
    )
}

export default GenericList