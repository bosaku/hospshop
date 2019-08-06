import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { DatContext } from "../context/hospDataContext.js";
import LinkButton from "../components/linkButton";

function ResultsWidget(props) {
  const context = React.useContext(DatContext);

  const clickModal = () => {
    context.procedureModOpen(true);
    console.log("click modal");
  };

  useEffect(() => {}, [context.state.singleResult]);

  return (
    <View className="textInputBorder">
      {context.state.searchResults.length > 1 && (
        <Button
          className="procedureSearchbarButton"
          onPress={clickModal}
          title={
            "Choose from " + context.state.searchResults.length + " Matches"
          }
        />
      )}

      <Text className="textWLessPadding">
        {'Search term : "' + context.state.searchTerm + '"'}{" "}
      </Text>
      <Text className="textWLessPadding">
        {'CPT Code for service : "' + context.state.singleResult.CPTCodes + '"'}{" "}
      </Text>
      <Text className="textWLessPadding">
        {"Description : " +
          JSON.stringify(context.state.singleResult.CodeDescription, null, 2)}
      </Text>
      {/* {context.state.searchResults !=null && <LinkButton url={"/results"} />} */}
    </View>
  );
}

export default ResultsWidget;
