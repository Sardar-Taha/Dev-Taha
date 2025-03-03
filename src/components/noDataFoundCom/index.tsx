import { NoDataFoundWrapper, Text } from "./element";
// import noData from "../../assets/images/no-data.png";
import { nodatafound } from "assets";

interface Props {
  text?: any;
}

function NoDataFound({ text }: { text?: any }) {
  return (
    <NoDataFoundWrapper>
      <img className="img-fluid noData" src={nodatafound} />
      <Text>NO DATA FOUND!</Text>
    </NoDataFoundWrapper>
  );
}

export default NoDataFound;
