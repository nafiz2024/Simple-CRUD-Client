import { getUserById } from "@/app/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

const UsersDetailsPage = async ({ params }) => {
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
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
                                User Details
                            </p>
                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                {user.name}
                            </h1>
                            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                                Complete profile overview for this user, including account role,
                                email address, and identifier.
                            </p>
                        </div>
                    </div>

                    <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-slate-900 text-4xl font-bold text-white shadow-lg">
                        {user.name?.slice(0, 1)?.toUpperCase() || "U"}
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.18)]">
                        <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                                    Profile Info
                                </p>
                                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                                    {user.name}
                                </h2>
                            </div>
                            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                                {user.role}
                            </span>
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-[1.5rem] bg-slate-50 p-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                    Full Name
                                </p>
                                <p className="mt-3 text-lg font-semibold text-slate-900">
                                    {user.name}
                                </p>
                            </div>

                            <div className="rounded-[1.5rem] bg-slate-50 p-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                    Email Address
                                </p>
                                <p className="mt-3 break-all text-lg font-semibold text-slate-900">
                                    {user.email}
                                </p>
                            </div>

                            <div className="rounded-[1.5rem] bg-slate-50 p-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                    Account Role
                                </p>
                                <p className="mt-3 text-lg font-semibold capitalize text-slate-900">
                                    {user.role}
                                </p>
                            </div>

                            <div className="rounded-[1.5rem] bg-slate-50 p-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                    Account Status
                                </p>
                                <p className="mt-3 text-lg font-semibold text-emerald-600">
                                    Active
                                </p>
                            </div>
                        </div>
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
                                Quick Summary
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UsersDetailsPage;
