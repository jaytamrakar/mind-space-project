import { BiAlarmExclamation, BiAlarmAdd, BiAdjust, BiAddToQueue, BiAbacus, BiLeftArrow } from "react-icons/bi";
import { RiCreativeCommonsSaLine } from "react-icons/ri";

export const MenuItems = {
    user: [
        {
            title: "Profile",
            icon: BiAlarmExclamation,
            link: "profile",
        },
        {
            title: "Apply for Doctor",
            icon: RiCreativeCommonsSaLine,
            link: "apply",
        },
        {
            title: "Appointments",
            icon: BiAlarmExclamation,
            gap: true,
            link: "appointments",
        },
        {
            title: "Schedule",
            icon: BiAlarmAdd,
            link: "schedule",
        },
        {
            title: "Settings",
            icon: BiAddToQueue,
            link: "settings",
        },
        {
            title: "Get User",
            icon: BiAdjust,
            link: "get-user",
        },
    ],
    doctor: [
        {
            title: "Profile",
            icon: BiAlarmExclamation,
            link: "profile",
        },
        {
            title: "Appointments",
            icon: BiAlarmExclamation,
            gap: true,
            link: "appointments",
        },
        {
            title: "Get User",
            icon: BiAdjust,
            link: "get-user",
        },
        {
            title: "Settings",
            icon: BiAddToQueue,
            link: "settings",
        },
    ],
    admin: [
        {
            title: "Profile",
            icon: BiAlarmExclamation,
            link: "profile",
        },
        {
            title: "Doctors",
            icon: RiCreativeCommonsSaLine,
            link: "apply",
        },
        {
            title: "Users",
            icon: RiCreativeCommonsSaLine,
            link: "apply",
        },
        {
            title: "Appointments",
            icon: BiAlarmExclamation,
            gap: true,
            link: "appointments",
        },
        {
            title: "Get User",
            icon: BiAdjust,
            link: "get-user",
        },
        {
            title: "Search",
            icon: BiAdjust,
            link: "search",
        },
        {
            title: "Analytics",
            icon: BiLeftArrow,
            link: "analytics",
        },
        {
            title: "Files",
            icon: BiAbacus,
            gap: true,
            link: "files",
        },
        {
            title: "Settings",
            icon: BiAddToQueue,
            link: "settings",
        },
    ],
};
