import {useLocationsStore} from "../../cross-cutting/stores/global.ts";

export const Bounty = () => {
    const locations =
        useLocationsStore((state) => state.locations);

    return (
        <>
            <h2 className='text-2xl mb-2'>Bounty</h2>
            <hr className='my-2'/>
            <p className='mb-4'>Each row represents a Location that a Scout has found.</p>
            <p className='mb-4'>Cache units are in Grams (gm).</p>
            <table className='flex flex-col'>
                <thead>
                <tr className='grid grid-cols-4 text-center text-sm font-bold'>
                    <th>Name</th>
                    <th>Location ID</th>
                    <th>Number of Caches</th>
                    <th>Gram</th>
                </tr>
                </thead>
                <tbody>{
                    locations.map(l => {
                        if (!l.isFound) return;

                        let numOfTotalGramsInLocation = 0;

                        l.pollenBounty.forEach((p) => numOfTotalGramsInLocation += p.grams);

                        return (
                            <tr key={l.uuid} className='grid grid-cols-4 text-center text-[0.8rem]'>
                                <td className='text-left font-bold'>{l.name}</td>
                                <td>{l.uuid}</td>
                                <td>{l.pollenBounty.length}</td>
                                <td>{numOfTotalGramsInLocation}</td>
                            </tr>
                        )
                    }) ||
                    <tr className='grid grid-cols-4 text-center text-sm font-bold'>
                        <td className='col-span-4 p-12 text-amber-800 text-shadow-black text-2xl'>No Locations have been
                            found yet.
                        </td>
                    </tr>
                }</tbody>
            </table>
        </>
    );
};
