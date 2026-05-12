import { getUsers } from "../lib/data";
import AddUserModal from "../components/AddUserModal";
import UsersTable from "../components/UsersTable";
import { createUser, deleteUser } from "../lib/actions";

const UsersPage = async () => {
    const users = await getUsers();

    return (
        <section className="min-h-full bg-gradient-to-br from-slate-100 via-white to-cyan-50 px-6 py-10 text-slate-900">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
                <div className="grid gap-6 rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.25)] backdrop-blur lg:grid-cols-[1.35fr_0.65fr] lg:p-10">
                    <div className="flex flex-col justify-between gap-8">
                        <div className="space-y-4">
                            <span className="inline-flex w-fit rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold text-cyan-700">
                            Users Dashboard
                            </span>
                            <div className="space-y-3">
                                <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                                    Users Management
                                </h1>
                                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-lg">
                                    Registered users list from your API with quick role and
                                    contact details, built for faster browsing and cleaner user
                                    administration.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                            <AddUserModal createUserAction={createUser} />
                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-5 py-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                        Total Users
                                    </p>
                                    <p className="mt-2 text-2xl font-bold text-slate-900">
                                        {users.length}
                                    </p>
                                </div>
                                <div className="rounded-[1.25rem] border border-cyan-100 bg-cyan-50 px-5 py-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                                        Source
                                    </p>
                                    <p className="mt-2 text-sm font-semibold text-cyan-900">
                                        Live `/users` snapshot
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex h-full flex-col justify-between rounded-[1.75rem] bg-slate-900 p-6 text-white shadow-[0_24px_60px_-24px_rgba(15,23,42,0.45)]">
                        <div>
                            <p className="text-sm font-medium text-slate-300">Overview</p>
                            <p className="mt-3 text-5xl font-bold tracking-tight">{users.length}</p>
                            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
                                Active records currently available in your users collection for
                                management and review.
                            </p>
                        </div>

                        <div className="mt-8 rounded-[1.25rem] border border-white/10 bg-white/5 px-5 py-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                                Current Feed
                            </p>
                            <p className="mt-2 text-sm text-slate-300">
                                Synced from <span className="font-semibold text-white">`/users`</span>
                            </p>
                        </div>
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
