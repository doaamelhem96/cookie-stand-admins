import { hourly_sales } from "@/data/data";
export default function ReportTable({ CookieStands }) {
    return (
        <>
            {CookieStands.length === 0 ? (
                <p className="text-center text-green-500">Report table is Empty...</p>
            ) : (
                <table className="mx-auto mt-4 border border-green-500">
                    <caption className="mb-2 text-lg font-semibold text-center text-green-500">Report Table</caption>
                    <thead className="bg-green-200">
                        <tr>
                            <th>Location 1</th>
                            <th>6am</th>
                            <th>7am</th>
                            <th>8am</th>
                            <th>9am</th>
                            <th>10am</th>
                            <th>11am</th>
                            <th>12am</th>
                            <th>1pm</th>
                            <th>2pm</th>
                            <th>3pm</th>
                            <th>4pm</th>
                            <th>5pm</th>
                            <th>6pm</th>
                            <th>7pm</th>
                            <th>Totals</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            CookieStands.map((obj, inex) => (
                                <tr key={obj.id}>
                                    <td key = {obj.id+1000}>{obj.location}</td>
                                    {hourly_sales.map((sales, index) => (
                                        <td>{sales}</td>
                                    ))}
                                </tr>
                            ))
                        }
                        <tr>
                            <td>Total</td>
                            {hourly_sales.map((sales, index) => (
                                <td>{sales * CookieStands.length}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    );
}