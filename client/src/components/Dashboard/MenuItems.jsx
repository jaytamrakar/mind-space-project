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
            link: "admin/all-doctors",
        },
        {
            title: "Users",
            icon: RiCreativeCommonsSaLine,
            link: "admin/all-users",
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
            title: "Pending Requests",
            icon: BiLeftArrow,
            link: "admin/pending-Request",
        },
        {
            title: "Blocked Users",
            icon: BiAbacus,
            gap: true,
            link: "admin/blocked-users",
        },
        {
            title: "Blocked Doctores",
            icon: BiAddToQueue,
            link: "admin/blocked-doctors",
        },
    ],
};
