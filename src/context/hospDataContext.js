
import React from "react";
import Dat from "../supportingFiles/codesNdescriptions.json"
//http://www.convertcsv.com/csv-to-json.htm
export const DatContext = React.createContext();

export const HospDataConsumer = DatContext.Consumer

export class HospDataProvider extends React.Component {
    state = {
        loading:false,
        cptDat:"not yet loaded"
    }    

    
    componentDidMount() {
        
        this.setState({cptDat: Dat})
            
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
        // this.state.cptDat = ""

        return (
            <DatContext.Provider value={this.state}>
                {this.props.children}
            </DatContext.Provider>
        )
    }   
}
