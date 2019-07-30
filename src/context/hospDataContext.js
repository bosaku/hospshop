
import React from "react";

const DatContext = React.createContext();

const hospDataConsumer = DatContext.Consumer

export default class HospDataProvider extends React.Component {
    state = {
        loading:false,
        cptDat:"not yet loaded"
    }    

    searchCPTCodes = (code) => {
       // const dat = require('../supportingFiles/cptCodesTransposedBeauty.json')
        this.setState({cptDat:"Hello"})
        console.log("search cpt codes")
    }

    searchByDescription = (desc) => {
        // const dat = require('../supportingFiles/cptCodesTransposedBeauty.json')
        //  this.setState({cptDat:"Hello"})
         console.log("search by desc")
     }

    render() {
        // const value = {
        //     cptDat: this.state.cptDat,
        //     loading: this.state.loading
        // }

        return (
            <DatContext.Provider value={this.state}>
                {this.props.children}
            </DatContext.Provider>
        )
    }   
}
