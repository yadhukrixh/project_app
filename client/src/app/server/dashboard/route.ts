// src/app/notifications/route.ts
import { NextResponse } from "next/server";
import { dashboardData } from "../data/dashboard-data";

export async function POST(request: Request) {
    try {

        const dashboardServicesData = dashboardData.reduce((acc, item) => {
            acc[item.label] = {
                mainData: item.maindata,
                subData: item.subdata,
                netPercentage: item.netpercentage,
                netStatus: item.netstatus,
            };
            return acc;
        }, {} as Record<string, any>);

        // Construct the response object
        const response = {
            status: true,
            data: dashboardServicesData,
            message: "Dashboard data fetched successfully",
        };
        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            {
                status: false,
                message: "Server Error.",
            },
            { status: 500 }
        );
    }
}
