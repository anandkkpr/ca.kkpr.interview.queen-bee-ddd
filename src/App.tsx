import './_styles/App.scss'
import {Population} from "./bounded-contexts/population/Population.tsx";
import {Bounty} from "./bounded-contexts/bounty/Bounty.tsx";
import {Warehouse} from "./bounded-contexts/warehouse/Warehouse.tsx";
import {SiteHeader} from "./cross-cutting/components/SiteHeader.tsx";
import {useLocationsStore, usePopulationStore} from "./cross-cutting/stores/global.ts";
import {toast, ToastContainer} from "react-toastify";

function App() {
    const {dispatchScout, dispatchHarvester} = usePopulationStore();
    const {updateLocation} = useLocationsStore();

    const dispatchScoutClickHandler = () => {
        const worker = dispatchScout();
        if (worker) toast(`Scout Dispatched: ${worker.name}`, {position: "top-center"});

        updateLocation().then((l) => {
            if (l) toast(`Our Scout has found a Bounty Location!: ${l.name}`, {position: "bottom-center"});
        });
    }

    const dispatchHarvesterClickHandler = () => {
        const worker = dispatchHarvester();
        if (worker) toast(`Harvester Dispatched: ${worker.name}`);
    }

    return (
        <>
            <SiteHeader/>
            <div className='grid grid-cols-12 gap-2'>
                <div className="rounded-md col-span-4 border-2 border-violet-400 min-h-24 p-4">
                    <h2 className='text-2xl mb-4'>Control Panel</h2>
                    <div className='flex flex-col items-start'>
                        <button className='mb-2 w-6/12' onClick={dispatchScoutClickHandler}>
                            Dispatch Scout
                        </button>
                        <button className='mb-2 w-6/12' onClick={dispatchHarvesterClickHandler}>
                            Dispatch Harvester
                        </button>
                        <ToastContainer
                            autoClose={1200}
                            newestOnTop={true}
                        />
                    </div>
                </div>
                <div className="rounded-md col-span-8 border-2 border-amber-800 min-h-24 p-4">
                    <Population/>
                </div>
                <div className="rounded-md col-span-6 border-2 border-amber-400 min-h-24 p-4">
                    <h2 className='text-2xl'></h2>
                    <Bounty/>
                </div>
                <div className="rounded-md col-span-6 border-2 border-amber-600 min-h-24 p-4">
                    <h2 className='text-2xl'></h2>
                    <Warehouse/>
                </div>
            </div>
        </>
    )
}

export default App
