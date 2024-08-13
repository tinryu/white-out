"use client"
import React, { useState, useCallback } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import { Datepicker } from "flowbite-react";
import moment from "moment";
import events from "../resource/event";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const Scheduler: React.FC = () => {
  const [showModalSelect, setShowModalSelect] = useState<boolean>(false);
  const [showModalSelectSlot, setShowModalSelectSlot] = useState<boolean>(false);

  const [eventsData, setEventsData] = useState<typeof events>(events);
  const [selectEvents, setSelectEvents] = useState({ start: "", end: "", title: "", desc: "" });
   

  const handleSelectSlot = useCallback(
    ({ start, end }: any) => {
      const title = window.prompt('New Event name')
      if (title) {
        setEventsData((prev) => [...prev, { start, end, title }])
      }
    },
    [setEventsData]
  )
  const handleSelectEvent = useCallback(
    (event: any) => {
      setShowModalSelect(true);
      setSelectEvents(event)
    },
    []
  )

  return (
    <>
    <div style={{ height: 700 }}>
      <BigCalendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={handleSelectEvent}
        // onSelectSlot={() => {setShowModalSelectSlot(true)}}
        onSelectSlot={handleSelectSlot}
      />
    </div>
    <Dialog open={showModalSelect} onClose={setShowModalSelect} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <button
              type="button"
              data-autofocus
              onClick={() => setShowModalSelect(false)}
              className="absolute top-0 right-0 mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              <span className="i-mdi-close"></span>
            </button>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    {selectEvents.title}
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {selectEvents.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>

    <Dialog open={showModalSelectSlot} onClose={setShowModalSelectSlot} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <button
              type="button"
              data-autofocus
              onClick={() => setShowModalSelectSlot(false)}
              className="absolute top-0 right-0 mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              <span className="i-mdi-close"></span>
            </button>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="w-full">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="font-bold">Title</p>
                    <input type="text" name="Title" id="Title" className="my-5 rounded-xl border-gray-300 w-full" />

                    <p className="font-bold">Description</p>
                    <input type="text" name="Description" id="Description" className="my-5 rounded-xl border-gray-300 w-full" />

                    <p className="font-bold">Time Start</p>
                    <Datepicker name="dateStart" id="dateStart" className="my-5 rounded-xl border-gray-300 w-full"/>

                    <p className="font-bold">Time End</p>
                    <Datepicker name="dateEnd" id="dateEnd" className="my-5 rounded-xl border-gray-300 w-full"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleSelectSlot}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Save
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setShowModalSelectSlot(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
    </>
  );
};

export default Scheduler