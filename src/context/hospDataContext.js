import React from "react";
import Dat from "../supportingFiles/codesNdescriptions.json";

//http://www.convertcsv.com/csv-to-json.htm
export const DatContext = React.createContext();

export const HospDataConsumer = DatContext.Consumer;

export class HospDataProvider extends React.Component {
  state = {
    loading: false,
    cptDat: "not yet loaded",
    searchResults: "",
    singleResult: "",
    resultIndex: 0,
    searchFailed: false,
    procedureModalClicked: false,
    hospitalModalClicked: false,
    clearDesc:false,
    clearCode:false
  };

  componentDidMount() {
    this.setState({ cptDat: Dat });
  }

  selectNext = () => {
    if (this.state.searchResults === 0) return;

    if (this.state.resultIndex < this.state.searchResults.length - 1)
      this.state.resultIndex += 1;
    else this.state.resultIndex = 0

    this.setState({
      singleResult: this.state.searchResults[this.state.resultIndex]
    });

  };

  selectPrevious = () => {
    if (this.state.searchResults === 0) return;

    if(this.state.resultIndex > 0)
        this.state.resultIndex -= 1;
        else this.state.resultIndex = this.state.searchResults.length - 1

    this.setState({
      singleResult: this.state.searchResults[this.state.resultIndex]
    });
  };

  searchByDescription = desc => {

    // if(this.state.cptDat==null) return;

    const matches = this.state.cptDat.filter(item => {
      return item.CodeDescription.toLowerCase().includes(desc.toLowerCase());
    });

    if (matches.length > 0) {
      this.setState({
        searchResults: matches,
        singleResult: matches[0],
        // cptDat: matches[0].CPTCodes,
        desc: matches[0].CodeDescription,
        searchFailed:false,
        clearCode:true,
        clearDesc:false
      });
    } else {
      //console.log("Did not find matches ");
      this.setState({
          searchResults: null,
          singleResult:null,
          searchFailed:true
      })
    }
  };

  searchByCode = code => {

    // if(this.state.cptDat==null) return;

    const matches = this.state.cptDat.filter(item => {
      return item.CPTCodes.includes(code);
    });

    if (matches.length > 0) {
      this.setState({
        searchResults: matches,
        singleResult: matches[0],
        // cptDat: matches[0].CPTCodes,
        desc: matches[0].CodeDescription,
        searchFailed:false,
        clearCode:false,
        clearDesc:true
      });
    } else {
        this.setState({
            searchResults: null,
          singleResult:null,
            searchFailed:true
        })
    //   console.log("Did not find matches ");
    }
  };

  openProcedureModal = val => {
    console.log("context clicked");
    this.setState({
      procedureModalClicked: val
    });
  };

  render() {
    return (
      // <DatContext.Provider value={this.state} runSearch={this.searchBy}>
      <DatContext.Provider
        value={{
          state: this.state,
          onSearch: this.searchByDescription,
          onCodeSearch: this.searchByCode,
          procedureModOpen: this.openProcedureModal,
          selectNext: this.selectNext,
          selectPrevious: this.selectPrevious
        }}
      >
        {this.props.children}
      </DatContext.Provider>
    );
  }
}
