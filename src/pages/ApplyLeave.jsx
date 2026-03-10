import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Plus, User, FileText } from "lucide-react";
// import Stat from "../components/ApplicationCard"

const ApplyLeave = () => {
    const [form, setForm] = useState({
        category: "",
        fromDate: "",
        toDate: "",
        leaveTime: "",
        returnTime: "",
        remark: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="min-h-screen pt-20 bg-neutral-950 text-white">
            <Navbar />

            <div className="px-6 pt-5 pb-8 max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-1">Apply for Leave</h1>
                    <p className="text-neutral-400">
                        Submit your leave application and track your requests
                    </p>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 ">
                    <Stat title="Total Applications" value="0" color="text-white" />
                    <Stat title="Pending Review" value="0" color="text-amber-300" />
                    <Stat title="Approved" value="0" color="text-emerald-300" />
                    <Stat title="Rejected" value="0" color="text-red-300" />
                </div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* FORM */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                                <Plus className="w-4 h-4 text-neutral-400" />
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold">New Leave Application</h2>
                                <p className="text-sm text-neutral-400">
                                    Fill out the form to submit your leave request
                                </p>
                            </div>
                        </div >

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* CATEGORY */}
                            <div>
                                <label className="block text-sm font-medium text-neutral-20">
                                    Leave Category
                                </label>
                                <select name="category" value={form.category} id="" onChange={handleChange} className="text-white bg-white/5 p-1.5 rounded-sm border border-white/20 w-full">
                                    <option className="bg-black/80" value="Select Category">Select Category</option>
                                    <option className="bg-black/80" value="Personal Reasons">Personal Reasons</option>
                                    <option className="bg-black/80" value="Personal Reason">Personal Reason</option>
                                    <option className="bg-black/80" value="Hackathon Participation">Hackathon Participation</option>
                                    <option className="bg-black/80" value="College Events (seminars, workshops, competetions etc.)">College Events (seminars, workshops, competetions etc.)</option>
                                    <option className="bg-black/80" value="Sick LEave/ Medical reasons">Sick LEave/ Medical reasons</option>
                                    <option className="bg-black/80" value="Placement Drives">Placement Drives</option>
                                    <option className="bg-black/80" value="Company Work(official tasks or visit)">Company Work(official tasks or visit)</option>
                                    <option className="bg-black/80" value="Interview">Interview</option>
                                    <option className="bg-black/80" value="Family Function">Family Function</option>
                                    <option className="bg-black/80" value="Emergency Situations">Emergency Situations</option>
                                    <option className="bg-black/80" value="Travel Related reasons">Travel Related reasons</option>
                                    <option className="bg-black/80" value="Duty Leave"> Duty Leave</option>
                                    <option className="bg-black/80" value="Others">Others</option>
                                </select>

                            </div >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Input
                                    label="From Date"
                                    type="date"
                                    name="fromDate"
                                    value={form.fromDate}
                                    onchange={handleChange}
                                />

                                <Input
                                    label="To Date"
                                    type="date"
                                    name="toDate"
                                    value={form.toDate}
                                    onchange={handleChange}
                                />

                            </div>

                            {/* TIME */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Input
                                    label="Leave Time"
                                    type="time"
                                    name="leaveTime"
                                    value={form.leaveTime}
                                    onchange={handleChange}
                                />

                                <Input
                                    label="Return Time"
                                    type="time"
                                    name="returnTime"
                                    value={form.returnTime}
                                    onchange={handleChange}
                                />
                            </div>

                            {/* REMARK */}
                            <div>
                                <label className="block text-sm font-medium text-neutral-200 mb-2 ">
                                    Additional Remarks (Optional)
                                </label>


                                <textarea
                                    name="remark"
                                    value={form.remark}
                                    onChange={handleChange}
                                    placeholder="Any additional information for your mentor or admin"
                                    className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 min-h-22.5 focus:outline-none focus:ring-1 focus:ring-neutral-500 "
                                />
                            </div>


                            {/* BUTTON */}
                            <button
                                type="submit"
                                disabled={!form.category}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed font-medium">
                                <FileText className="w-4 h-4" />
                                Submit Leave Application buttonz
                            </button>
                        </form>
                    </div >

                    {/* Request List */}

                    <div className=" bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                                <User className="w-4 h-4 text-neutral-400" />
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold">My Leave Requests</h2>
                                <p className="text-sm text-neutral-400">
                                    Track the status of your applications
                                </p>
                            </div>
                        </div>

                        {/* EMPTY STATE */}
                        <div className="text-center py-12">
                            <FileText className="w-12 h-12 text-neutral-600 mx-auto mb-4" />

                            <div className=" text-neutral-400">No leave requests yet</div>

                            <div className="text-sm text-neutral-500 mt-1">
                                Your submitted applications will appear here
                            </div>
                        </div>

                    </div >

                </div >
            </div >
        </div >
    )
}


// Reusable components
const Stat = ({ title, value, color = "text-neutral-100" }) => (
    <div className=" bg-neutral-900 border border-neutral-800 rounded-lg p-4">
        <div className={`text-2xl font-bold ${color}`}>{value}</div>
        <div className="text-neutral-400 text-sm">{title}</div>
    </div>
);

const Input = ({ label, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-neutral-200 mb-2">
            {label}
        </label>
        <input
            {...props}
            className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500"
        />
    </div>
);

export default ApplyLeave;