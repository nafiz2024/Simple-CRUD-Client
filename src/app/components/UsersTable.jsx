import { Button } from "@heroui/react";
import Link from "next/link";

const UsersTable = ({ users }) => {
    return (
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_60px_-24px_rgba(15,23,42,0.2)]">
            <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                    <thead className="bg-slate-900 text-sm uppercase tracking-[0.2em] text-slate-200">
                        <tr>
                            <th className="px-6 py-4 font-semibold">#</th>
                            <th className="px-6 py-4 font-semibold">Name</th>
                            <th className="px-6 py-4 font-semibold">Email</th>
                            <th className="px-6 py-4 font-semibold">Role</th>
                            <th className="px-6 py-4 font-semibold">User ID</th>
                            <th className="px-6 py-4 text-right font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr
                                key={user._id}
                                className="border-t border-slate-200 transition hover:bg-slate-50"
                            >
                                <td className="px-6 py-5 text-sm font-semibold text-slate-500">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 font-bold text-cyan-700">
                                            {user.name?.slice(0, 1)?.toUpperCase() || "U"}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900">
                                                {user.name}
                                            </p>
                                            <p className="text-sm text-slate-500">
                                                Active user
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-5 text-sm text-slate-600">
                                    <span className="break-all">{user.email}</span>
                                </td>
                                <td className="px-6 py-5">
                                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-5 font-mono text-sm text-slate-500">
                                    <span className="block max-w-[220px] truncate">
                                        {user._id}
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-right">
                                    <div className="flex justify-end gap-3">
                                        <Link
                                            href={`/users/${user._id}`}
                                            className="inline-flex text-cyan-600 hover:text-cyan-800"
                                        >
                                            <Button
                                                className="rounded-full border border-cyan-200 bg-cyan-50 px-5 font-semibold text-cyan-700 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-100"
                                                variant="light"
                                            >
                                                View Details
                                            </Button>
                                        </Link>
                                        <Button
                                            className="rounded-full border border-rose-200 bg-rose-50 px-5 font-semibold text-rose-700 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-100"
                                            variant="light"
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersTable;
