import AccountSidebar from "../../components/AccountSidebar";
import MyListItem from "./MyListItem";
const MyList = () => {
    
  return (
     <section className="py-10 w-full">
          <div className="container flex gap-5">
            <div className="col1 w-[20%]">
              <AccountSidebar/>
            </div>
            <div className="col2 w-[70%]">
             <div className="shadow-md rounded-md bg-white">
            <div className="pt-2 pb-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My List</h2>
              <p className="mt-0 mb-3">
                There are <span className="font-bold text-primary">2 </span>
                Products in my list
              </p>
            </div>
            <MyListItem qty={1}/>
            <MyListItem qty={1}/>
            <MyListItem qty={1}/>
            <MyListItem qty={1}/>
            <MyListItem qty={1}/>
            <MyListItem qty={1}/>
          </div>
            </div>
            
          </div>
        </section>
  );
};

export default MyList;
