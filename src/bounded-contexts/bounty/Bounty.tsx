export const Bounty = () => {
    return (
        <>
            <h2 className='text-2xl mb-2'>Bounty</h2>
            <hr className='my-2'/>
            <p className='mb-4'>Each row represents a Location that a Scout has found.</p>
            <table className='flex flex-col'>
                <th className='grid grid-cols-3 text-center text-sm font-bold'>
                    <td>Name</td>
                    <td>Location ID</td>
                    <td>Number of Caches</td>
                </th>
                <tr className='grid grid-cols-3 text-center text-sm'>
                    <td className='text-left font-bold'>Tamara's Garden</td>
                    <td>8888</td>
                    <td>0</td>
                </tr>
                <tr className='grid grid-cols-3 text-center text-sm'>
                    <td className='text-left font-bold'>Flinnley Peak</td>
                    <td>9999</td>
                    <td>0</td>
                </tr>
            </table>
        </>
    );
};
