import { LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip, Legend } from "recharts"
import "./index.css"

const chartData=[
    {name:"6/1/2024",orders:4,sales:3.6},
    {name:"7/1/2024",orders:3,sales:2.8},
    {name:"8/1/2024",orders:2,sales:2.2}
]

const Linecharts=()=>{
    return(
        <div className="linechart">
            <h2>Sales vs Orders</h2>
           
            <LineChart width={650} height={400}  data={chartData}>
                <Line type="monotone" dataKey="orders" stroke="orange" strokeWidth={3}/>
                <Line type="monotone" dataKey="sales" stroke="green" strokeWidth={3}/>
                <CartesianGrid stroke="#000" strokeWidth={0.5}/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
            </LineChart>
           
        </div>
      
    )
}

export default Linecharts