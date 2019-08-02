
import React from "react";
import Dat from "../supportingFiles/codesNdescriptions.json"
//http://www.convertcsv.com/csv-to-json.htm
export const DatContext = React.createContext();

export const HospDataConsumer = DatContext.Consumer

export class HospDataProvider extends React.Component {
    state = {
        loading:false,
        cptDat:"not yet loaded",
        searchTerm:"",
        searchResults:"",
        procedureModalClicked:false,
        hospitalModalClicked:false
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
        const matches = this.state.cptDat.filter(item => {
            return item.CodeDescription.toLowerCase().includes(desc);
          });
      
        
           this.setState({searchResults:matches})
        
     }

    render() {
        // this.state.cptDat = ""

        return (
            // <DatContext.Provider value={this.state} runSearch={this.searchBy}>
            <DatContext.Provider value={{state:this.state, onSearch:this.searchByDescription}}>
                {this.props.children}
            </DatContext.Provider>
        )
    }   
}
