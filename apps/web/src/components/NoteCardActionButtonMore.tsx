import EllipsisVerticalIcon from "@heroicons/react/24/outline/EllipsisVerticalIcon";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const NoteCardActionButtonMore = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="rounded-full p-2 hover:bg-gray-100">
          <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="div"
          className="absolute right-0 mt-2 flex w-56 origin-top-right flex-col divide-y divide-gray-100 rounded-md bg-white py-2 shadow-lg"
        >
          <Menu.Item
            as="button"
            className="px-3 py-1 text-left text-sm hover:bg-gray-100"
          >
            Change bookmarks
          </Menu.Item>
          <Menu.Item
            as="button"
            className="px-3 py-1 text-left text-sm hover:bg-gray-100"
          >
            Add draw
          </Menu.Item>
          <Menu.Item
            as="button"
            className="px-3 py-1 text-left text-sm hover:bg-gray-100"
          >
            Show checkboxes
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
