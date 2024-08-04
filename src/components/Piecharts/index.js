import { Legend, Pie, PieChart,Cell } from "recharts"
import "./index.css"

const chartData=[
  {
    name:"WoodCommerce Store",Percentage:44
  },
  {
    name:"Shopify Store",Percentage:56
  }
]

const colors=["#0088FE","#FF8042"]

const Piecharts=()=>{
    return(
          <div className="piechart">
             <h2>Portion of Sales</h2>
             <PieChart width={400} height={500}>
                <Pie
                   data={chartData}
                   cx={250}
                   cy={250}
                   labelLine={false}
                   label={({name,Percentage})=>`${name}:${Percentage}%`}
                   outerRadius={100}
                   fill="#8884d8"
                   dataKey="Percentage"
                >
                  {chartData.map((each,index)=>(
                    <Cell key={index} fill={colors[index%colors.length]}/>
                  ))}  
                </Pie>
                <Legend/>
             </PieChart>
          </div>
    )
}

export default Piecharts