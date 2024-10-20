import { Button } from "@/components/ui/button";
import { columns } from "./components/Columns";
import { policies } from "./data";
import DateFilterRow from "./components/DateFilterRow";
import PolicyTable from "./components/PolicyTable";
import TotalCommision from "./components/TotalCommision";
import DateProvider from "./providers/DateProvider";

export default function Dashboard() {
    return (
        <DateProvider>
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-8">
                    <TotalCommision />
                    <Button>Add New Deal</Button>
                </div>

                <DateFilterRow />

                <PolicyTable columns={columns} data={policies} />
            </div>
        </DateProvider>
    );
}
