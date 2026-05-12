import { getUsers } from "../lib/data";
import AddUserModal from "../components/AddUserModal";
import UsersTable from "../components/UsersTable";
import {deleteUser } from "../lib/actions";

const UsersPage = async () => {
    const users = await getUsers();

    return (
        <section className="min-h-full bg-gradient-to-br from-slate-100 via-white to-cyan-50 px-6 py-10 text-slate-900">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
                <div className="flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.25)] backdrop-blur sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-3">
                        <span className="inline-flex w-fit rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold text-cyan-700">
                            Users Dashboard
                        </span>
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Users Management
                            </h1>
                            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                                Registered users list from your API with quick role and contact details.
                            </p>
                        </div>
                        <div>
                            <AddUserModal/>
                        </div>
                    </div>

                    <div className="w-full rounded-[1.5rem] bg-slate-900 p-5 text-white shadow-lg sm:max-w-xs">
                        <p className="text-sm text-slate-300">Total Users</p>
                        <p className="mt-2 text-4xl font-bold">{users.length}</p>
                        <p className="mt-2 text-sm text-slate-400">
                            Live snapshot from <span className="font-medium text-cyan-300">`/users`</span>
                        </p>
                    </div>
                </div>

                {users.length === 0 ? (
                    <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-800">No users found</h2>
                        <p className="mt-2 text-sm text-slate-500">
                            Add some users in the backend and they will appear here.
                        </p>
                    </div>
                ) : (
                    <UsersTable users={users} deleteUserAction = {deleteUser} />
                )}
            </div>
        </section>
    );
};

export default UsersPage;
