import constants from '../Components/constants'
let initialValue = {
  data:"",
  chartData:constants.initialValue
};

export default function rootReducer(state = initialValue, action) {
  switch(action.type){
    case 'YEAR':
      let list = [];
      constants.chartType.forEach(element => {
        list.push(constants[element + action.payload])
      });
      return  {...state, data: action.payload, chartData:list};
    default:
      return  {...state};
  }
 
}
