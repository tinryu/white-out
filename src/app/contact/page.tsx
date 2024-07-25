"use client"
import { Scheduler } from "@aldabil/react-scheduler";
import { color } from "chart.js/helpers";

const EVENTS = [
    {
        event_id: 1,
        start: new Date(new Date(new Date().setHours(9)).setMinutes(0)),
        end: new Date(new Date(new Date().setHours(13)).setMinutes(0)),
        title: 'gym go',
        color: '#e41f11'
    },
    {
        event_id: 2,
        start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
        end: new Date(new Date(new Date().setHours(15)).setMinutes(0)),
        title: 'gym go',
        color: "#ab2d2d",
    },
    {
        title: 'gym go ssss',
        event_id: 3,
        start: new Date(
            new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
                new Date().getDate() - 3
            )
            ),
        end: new Date(new Date(new Date().setHours(14)).setMinutes(0)),
        color: "#beecff",
    }
]
const RESOURCES = [
    {
        assignee: 1,
        text: "User One", 
        subtext: "Sales Manager", 
        avatar: "https://picsum.photos/200/300", 
        color: "#ab2d2d",
    },
    {
        assignee: 2,
        text: "User two", 
        subtext: "Sales Manager", 
        avatar: "https://picsum.photos/200/300", 
        color: "#ab2d2d",
    },
    {
        assignee: 3,
        text: "User three", 
        subtext: "Sales Manager", 
        avatar: "https://picsum.photos/200/300", 
        color: "#ab2d2d",
    }
]
const Page = () => {
  return (
    <div>
        <Scheduler
            view="week"
            events={EVENTS}
            // resources={RESOURCES}
            // resourceViewMode="tabs"
            navigation={true}
            // disableViewNavigator={true}
        />
    </div>
  )
}

export default Page