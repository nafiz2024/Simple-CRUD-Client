"use client";

import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const AddUserModal = ({ createUserAction }) => {
    return (
        <Modal>
            <Button
                className="rounded-full bg-cyan-500 px-6 font-semibold text-white shadow-sm transition hover:bg-cyan-600"
                variant="solid"
            >
                Add User
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="border border-slate-200 bg-white text-slate-900 shadow-2xl sm:max-w-lg">
                        <Modal.CloseTrigger />
                        <Modal.Header className="items-start gap-4">
                            <Modal.Icon className="bg-cyan-100 text-cyan-700">
                                <CirclePlus className="size-5" />
                            </Modal.Icon>
                            <div>
                                <Modal.Heading className="text-2xl font-bold text-slate-900">
                                    Add New User
                                </Modal.Heading>
                                <p className="mt-1.5 text-sm leading-6 text-slate-500">
                                    Enter the user details below to create a new account in your
                                    users collection.
                                </p>
                            </div>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface className="rounded-[1.5rem] bg-slate-50 p-5" variant="default">
                                <form action={createUserAction} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter full name" />
                                    </TextField>

                                    <TextField className="w-full" name="email" type="email">
                                        <Label>Email</Label>
                                        <Input placeholder="Enter email address" />
                                    </TextField>

                                    <TextField className="w-full" name="role" type="text">
                                        <Label>Role</Label>
                                        <Input defaultValue="user" placeholder="Enter role" />
                                    </TextField>

                                    <div className="flex justify-end gap-3 pt-4">
                                        <Button
                                            slot="close"
                                            className="rounded-full border border-slate-200 bg-white px-5 font-semibold text-slate-700 hover:bg-slate-100"
                                            variant="light"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            className="rounded-full bg-cyan-500 px-5 font-semibold text-white hover:bg-cyan-600"
                                            type="submit"
                                            variant="solid"
                                        >
                                            Save User
                                        </Button>
                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AddUserModal;
