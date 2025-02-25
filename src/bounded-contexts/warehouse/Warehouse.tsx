import {warehouses} from "../../_assets/data/db.ts";

export const Warehouse = () => {
    return (
        <>
            <h2 className='text-2xl mb-2'>Warehouse</h2>
            <hr className='my-2'/>
            <p className='mb-4'>Cache units are in Grams (gm).</p>
            <table className='flex flex-col'>
                <thead>
                <tr className='grid grid-cols-6 text-center font-bold'>
                    <th>Unit Name</th>
                    <th>Unit ID</th>
                    <th>Date Accessed</th>
                    <th>Max Capacity</th>
                    <th>Cache Total</th>
                    <th>Cache Remaining</th>
                </tr>
                </thead>
                <tbody>
                {warehouses.map(w => {
                    let cacheGramTotal = 0;

                    w.pollenCache.forEach((p) => cacheGramTotal += p.grams);

                    return (
                        <tr key={w.uuid} className='grid grid-cols-6 text-center text-[0.8rem]'>
                            <td className='text-left font-bold'>{w.name}</td>
                            <td className=''>{w.uuid}</td>
                            <td>{w.dateUpdated}</td>
                            <td>{w.maxCapacityInGrams}</td>
                            <td>{cacheGramTotal}</td>
                            <td>{cacheGramTotal}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    );
};
