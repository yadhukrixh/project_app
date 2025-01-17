// src/app/notifications/route.ts
import { NextResponse } from "next/server";
import { ActiveUsers } from "../data/active-users";

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON body
    const { searchQuery } = await request.json();
    const activeUsers = ActiveUsers;

    if (!searchQuery) {
      return NextResponse.json(
        {
          status: true,
          data: activeUsers,
          message: "Data fetched successfully",
        },
        { status: 200 }
      );
    }

    // Filter users based on search query (case-insensitive)
    const filteredUsers = activeUsers.filter((user) =>
      user.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return NextResponse.json(
      {
        status: true,
        data: filteredUsers,
        message: "Data fetched successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: false,
        error: "Failed to connect server.",
      },
      { status: 500 }
    );
  }
}
