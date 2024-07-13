import SearchInput from "./searchInput";
import Coversations from "./Coversations";
import LogoutButton from "./LogoutButton";

function SideBar() {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput />
      <div className='divider px-3'></div>
      <Coversations />
      <LogoutButton />
    </div>
  )
}

export default SideBar
