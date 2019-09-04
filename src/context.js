import React from "react";

const DataUserContext = React.createContext({})

export const UserProvider = DataUserContext.Provider
export const UserConsumer = DataUserContext.Consumer
export default DataUserContext