import "./index.css"

const tags=[
    {
        tagname:"Dashboard" ,
    },
    {
        tagname:"Inventory",
    },
    {
        tagname:"Returns",
    },
    {
        tagname:"Customers",
    },
    {
        tagname:"Shipping" ,
    },
    {
        tagname:"Channel",
    },
    {
        tagname:"Integrations",
    },
    {
        tagname:"Calculations",
    },
    {
        tagname:"Reports",
    },
    {
        tagname:"Account",
    }
]

const Sidebar=()=>{
  return(
    <div className="sidebar-card">
        <ul>
           {tags.map((tag,index)=>(
            <li key={index}>{tag.tagname}</li>
           ))} 
        </ul>
    </div>
  )
}

export default Sidebar