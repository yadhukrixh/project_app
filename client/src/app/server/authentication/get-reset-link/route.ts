// src/app/notifications/route.ts
import { NextResponse } from "next/server";
import { Users } from "../../data/user";

export async function POST(request: Request) {
    try {
        const { email } = await request.json();
        if(!email){
            return NextResponse.json(
                {
                    status:false,
                    message: "メールアドレスは必須です",
                }
            );
        }

        // check is the user exist
        const user = Users.find((user) => user.email === email);
        if (!user) {
            return NextResponse.json(
                {
                    status:false,
                    message: "ユーザーが見つかりませんでした。",
                }
            );
        }

        // After url sent successfully
        return NextResponse.json(
            {
                status:true,
                message: "パスワードリセットURLが正常に送信されました",
            }
        );


    } catch (error) {
        return NextResponse.json(
            {
                status:false,
                message: "Failed to connect server. ",
            },
            { status: 500 }
        );
    }
}
