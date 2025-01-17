export interface FetchDashboardResponses{
    status: boolean,
    data: DashboardServicesData,
    message: string
}

interface DataContents{
    mainData: string;
    subData: string;
    netPercentage: string;
    netStatus: "up" | "down" | "neutral";
}

export interface DashboardServicesData{
    totalUsers:DataContents;
    activeUsers:DataContents;
    retentionRate:DataContents;
    averageSearches:DataContents;
    lotteryUses:DataContents;
    accountDeletions:DataContents;
}