import { updateUser } from "@/app/lib/actions";
import { getUserById } from "@/app/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

const UserEditPage = async ({ params }) => {
    const { id } = await params;
    const user = await getUserById(id);

    if (!user) {
        notFound();
    }

    return (
        <section className="min-h-full bg-gradient-to-br from-slate-100 via-white to-cyan-50 px-6 py-10 text-slate-900">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
                <div className="flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.25)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-3">
                        <Link
                            href="/users"
                            className="inline-flex w-fit rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-100"
                        >
                            Back to Users
                        </Link>
                        <div className="space-y-2">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
                                Edit User
                            </p>
                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                {user.name}
                            </h1>
                            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                                Update profile information, contact details, and role assignment
                                for this user.
                            </p>
                        </div>
                    </div>

                    <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-slate-900 text-4xl font-bold text-white shadow-lg">
                        {user.name?.slice(0, 1)?.toUpperCase() || "U"}
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.18)]">
                        <div className="border-b border-slate-200 pb-5">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                                Editable Fields
                            </p>
                            <h2 className="mt-2 text-2xl font-bold text-slate-900">
                                Update User Information
                            </h2>
                        </div>

                        <form action={updateUser} className="mt-6 grid gap-5">
                            <div className="grid gap-2">
                                <label className="text-sm font-semibold text-slate-700">
                                    Full Name
                                </label>
                                <input
                                    defaultValue={user.name}
                                    className="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-300 focus:bg-white"
                                    type="text"
                                />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-semibold text-slate-700">
                                    Email Address
                                </label>
                                <input
                                    defaultValue={user.email}
                                    className="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-300 focus:bg-white"
                                    type="email"
                                />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-semibold text-slate-700">
                                    Role
                                </label>
                                <input
                                    defaultValue={user.role}
                                    className="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-300 focus:bg-white"
                                    type="text"
                                />
                            </div>

                            <div className="flex flex-wrap justify-end gap-3 pt-4">
                                <Link
                                    href={`/users/${user._id}`}
                                    className="inline-flex rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                                >
                                    Cancel
                                </Link>
                                <button
                                    type="button"
                                    className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-[0_24px_60px_-24px_rgba(15,23,42,0.35)]">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                                User ID
                            </p>
                            <p className="mt-4 break-all font-mono text-base leading-7 text-slate-100">
                                {user._id}
                            </p>
                        </div>

                        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.16)]">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                                Current Summary
                            </p>
                            <div className="mt-5 space-y-4 text-sm text-slate-600">
                                <p>
                                    <span className="font-semibold text-slate-900">Name:</span>{" "}
                                    {user.name}
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-900">Email:</span>{" "}
                                    {user.email}
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-900">Role:</span>{" "}
                                    <span className="capitalize">{user.role}</span>
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-900">Status:</span>{" "}
                                    Active
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserEditPage;
