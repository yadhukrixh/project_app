// src/app/notifications/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { newPassword, confirmationPassword } = await request.json();
        if(!newPassword || !confirmationPassword){
            return NextResponse.json(
                {
                    status:false,
                    message: "パスワードが必要です",
                }
            );
        }

        if (newPassword !== confirmationPassword) {
            return NextResponse.json(
                {
                    status:false,
                    message: "パスワードが一致しません。",
                }
            );
        }

        // After url sent successfully
        return NextResponse.json(
            {
                status:true,
                message: "パスワードが正常に更新されました。",
            }
        );


    } catch (error) {
        return NextResponse.json(
            {
                status:false,
                message: "パスワード設定に失敗しました。もう一度お試しください。",
            },
            { status: 500 }
        );
    }
}
