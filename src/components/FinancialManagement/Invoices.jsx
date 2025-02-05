import { useState } from "react";

const initialInvoices = [
  { id: 1, client: "ABC Corp", amount: 15000, status: "Paid", date: "2025-02-01" },
  { id: 2, client: "XYZ Ltd", amount: 10000, status: "Pending", date: "2025-02-05" },
];

function Invoices() {
  const [invoices, setInvoices] = useState(initialInvoices);

  const handleDownload = (invoice) => {
    const invoiceDetails = `Invoice ID: ${invoice.id}\nClient: ${invoice.client}\nAmount: $${invoice.amount}\nStatus: ${invoice.status}\nDate: ${invoice.date}`;
    const blob = new Blob([invoiceDetails], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Invoice-${invoice.id}.txt`;
    link.click();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Invoices</h2>

      <table className="min-w-full bg-white mt-4 shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Client</th>
            <th className="p-2">Amount ($)</th>
            <th className="p-2">Status</th>
            <th className="p-2">Date</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="border-t">
              <td className="p-2">{invoice.client}</td>
              <td className="p-2">{invoice.amount}</td>
              <td className="p-2">{invoice.status}</td>
              <td className="p-2">{invoice.date}</td>
              <td className="p-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDownload(invoice)}
                >
                  Download Invoice
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Invoices;
