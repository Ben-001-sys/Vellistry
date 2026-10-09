import "./globals.css";
import type {ReactNode} from "react";
export const metadata={title:"Vellistry",description:"Author-controlled fiction writing"};
export default function RootLayout({children}:{children:ReactNode}){
 return <html lang="en"><body>{children}</body></html>;
}
