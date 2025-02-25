import {warehouses} from "../../_assets/data/db.ts";

export const Warehouse = () => {
    return (
        <>
            <h2 className='text-2xl mb-2'>Warehouse</h2>
            <hr className='my-2'/>
            <p className='mb-4'>Cache units are in Grams (gm).</p>
            <table className='flex flex-col'>
                <th className='grid grid-cols-6 text-center font-bold'>
                    <td>Unit Name</td>
                    <td>Unit ID</td>
                    <td>Date Accessed</td>
                    <td>Max Capacity</td>
                    <td>Cache Total</td>
                    <td>Cache Remaining</td>
                </th>
                {warehouses.map(w => {
                    let cacheGramTotal = 0;

                    w.pollenCache.forEach((p) => cacheGramTotal += p.grams);

                    return (
                        <tr className='grid grid-cols-6 text-center text-[0.8rem]'>
                            <td className='text-left font-bold'>{w.name}</td>
                            <td className=''>{w.uuid}</td>
                            <td>{w.dateUpdated}</td>
                            <td>{w.maxCapacityInGrams}</td>
                            <td>{cacheGramTotal}</td>
                            <td>{cacheGramTotal}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    );
};
