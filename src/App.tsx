import './_styles/App.scss'
import {Population} from "./bounded-contexts/population/Population.tsx";
import {Bounty} from "./bounded-contexts/bounty/Bounty.tsx";
import {Warehouse} from "./bounded-contexts/warehouse/Warehouse.tsx";
import {SiteHeader} from "./cross-cutting/components/SiteHeader.tsx";
import {usePopulationStore} from "./cross-cutting/stores/global.ts";

function App() {
    // noinspection JSUnusedLocalSymbols
    const {dispatchScout, dispatchHarvester} = usePopulationStore();

    return (
        <>
            <SiteHeader />
            <div className='grid grid-cols-12 gap-2'>
                <div className="rounded-md col-span-4 border-2 border-violet-400 min-h-24 p-4">
                    <h2 className='text-2xl mb-4'>Control Panel</h2>
                    <div className='flex flex-col items-start'>
                        <button className='mb-2 w-6/12' onClick={dispatchScout}>
                            Dispatch Scout
                        </button>
                        <button className='mb-2 w-6/12' onClick={dispatchHarvester}>
                            Dispatch Harvester
                        </button>
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
