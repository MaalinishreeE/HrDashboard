import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {FilterByYear} from "../Redux/action";
import LineChart from "./ChartComponent";
import constants from "./constants";
import "./dashboard.css";

const Dashboard = () => {
    const [card, setCard] = useState(true);
    const [Line, setLine] = useState(true);
    const [PieChart, setPieChart] = useState(true);
    const [Bar, setBar] = useState(true);
    const [ScatterChart, setScatterChart] = useState(true);
    const [filterYear, setFilterYear] = useState('');
    const dispatch = useDispatch();
    const filterData = useSelector((state) => state.data.data);
    const chartData = useSelector((state) =>  state.data.chartData);
    const handleFilterByYear = (data) => {
        dispatch(FilterByYear(data));
        setFilterYear(data)
    }
    let chartType =['Line', 'PieChart', 'Bar','ScatterChart'];
    let details='cardDetails'+filterData;
    return (
        <div>
            <div className="filter-card">
                <div style={{ display: "flex" }}>
                    <div style={{padding:'5px',flex:1}}>
                        <label> Filter by Year : </label>
                        <select
                            name="course"
                              value={filterYear}
                              onChange={(e) => handleFilterByYear(e.target.value)}
                            className="filter-select"
                        >
                            <option className="filterOption" value="">
                                Please Choose...
                            </option>
                            {constants.filterByYear.map((course, index) => {
                                return (
                                    <option className="filterOption" key={index} value={course}>
                                        {course}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div style={{flex:1}}>
                        <div style={{ display: "flex" }}>
                            <div className="filter-content">
                                <input
                                    type="checkbox"
                                    checked={card}
                                    onChange={() => setCard(!card)}
                                />
                                <label> Card</label>
                            </div>
                            <div className="filter-content">
                                <input
                                    type="checkbox"
                                    checked={Line}
                                    onChange={()=>setLine(!Line)}
                                />
                                <label> Line chart</label>
                            </div>
                            <div className="filter-content">
                                <input
                                    type="checkbox"
                                    checked={PieChart}
                                    onChange={()=>setPieChart(!PieChart)}
                                />
                                <label>Pie Chart</label>
                            </div>
                            <div className="filter-content">
                                <input
                                    type="checkbox"
                                    checked={Bar}
                                    onChange={()=>setBar(!Bar)}
                                />
                                <label>Bar Chart</label>
                            </div>
                            <div className="filter-content">
                                <input
                                    type="checkbox"
                                    checked={ScatterChart}
                                    onChange={()=>setScatterChart(!ScatterChart)}
                                />
                                <label>Scatter Chart</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {card ?  <div style={{ display: "flex" }}>
                {constants[details].map((element, index) => (
                    <div key={index} className="card">
                        <div style={{ fontWeight: "bolder", paddingTop: "10px" }}>{element.label}</div>
                        <div style={{ fontSize: '35px', paddingTop: '10px', fontWeight: "bolder", color: `${element.color}` }}>{element.count}</div>
                    </div>
                ))}
            </div> : ""}
            <div style={{ display: "flex", flexWrap: "wrap" }}>
            {}
                {constants.chartType.map((element, index) => (
                     chartType[index] && <div className="card-style" key={index}>
                        <LineChart type={element} option={element + 'Options'} data={chartData[index]}  />
                    </div>
                ))}

            </div>

        </div>
    );
}

export default Dashboard;
