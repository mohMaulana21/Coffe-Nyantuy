import Input from "../ui/Input";
import Button from "../ui/Button";
import Header from "../ui/Header";
import { MdFilterList, MdMoreVert, MdSearch } from 'react-icons/md';
import { FaCoffee } from 'react-icons/fa';

const Layout = () => {
    return (
        <div>            
            <Header className="col-span-12 flex items-center justify-between">
                <div className="w-8 flex-auto px-4 py-4">
                    <div className="flex items-center gap-2">
                        <FaCoffee className="text-[var(--primary-400)] text-3xl" />
                        <h1 className="text-3xl font-semibold text-[var(--text-primary)]">
                            <span className="text-[var(--primary-400)]">Nyantuy'</span> 
                            Coffe
                        </h1>
                    </div>
                </div>

                <div className="w-full flex flex-auto border-x-2 border-[var(--neutral-300)]  max-w-4xl px-2 py-4 flex justify-center">
                    <div className="relative w-full max-w-md">
                        <Input type="text" name="search" id="search" placeholder="Search..." icon={<MdSearch size={20} />} />
                        <Button className='absolute -right-14 top-1/2 -translate-y-1/2 flex items-center gap-2' bgColor="primary" colorText="primary">
                            <MdFilterList size={20} />
                            filter
                        </Button>
                    </div>
                </div>

                <div className="w-8 flex-auto">
                    <div className="flex items-center gap-3 px-4 py-4">
                        <img src="/referensi_ui/user.png" className="w-10 h-10 rounded-full object-cover" alt="user" />
                        <div className="flex-1">
                            <h6 className="font-semibold text-[var(--text-primary)] leading-tight text-sm">Maulana</h6>
                            <p className="text-xs text-[var(--text-secondary)] leading-tight">maulana.rosy21@gmail.com</p>
                        </div>
                        <Button variant="ghost" className="pl-6 pr-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                            <MdMoreVert size={20} />
                        </Button>
                    </div>
               </div>        
            </Header>
            <main className="col-span-12 flex h-full">  
                <div className="w-8 flex-auto bg-red-500">Satu</div>
                <div className="w-full flex flex-auto border-x-2 border-[var(--neutral-300)]  max-w-4xl px-2 py-4 flex justify-center">Dua</div>
                <div className="w-8 flex-auto bg-red-500">Tiga</div>
            </main>
        </div>
    )
}

export default Layout;