// src/app/notifications/route.ts
import { NextResponse } from "next/server";
import { Users } from "../../data/user";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        const user = Users.find((user) => user.email === email);

        if (!user) {
            return NextResponse.json(
                {
                    status: false,
                    message: "パスワード設定に失敗しました。もう一度お試しください。",
                },
            );
        }

        if (user.password !== password) {
            return NextResponse.json(
                {   status:false,
                    message: "パスワード設定に失敗しました。もう一度お試しください。",
                },
            );
        }else{
            return NextResponse.json(
                {   status:true,
                    message: "Authentication Successfull.",
                },
            );
        }

    } catch (error) {
        return NextResponse.json(
            {
                status:false,
                error: "Failed to connect server. ",
            },
            { status: 500 }
        );
    }
}
