// import { Button } from "@/components/ui/button";
// import {
//   UserCheck,
//   Search,
//   ClipboardCheck,
//   BarChart3,
//   ShieldCheck,
// } from "lucide-react";
// import { NavLink } from "react-router-dom";

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-crime-50 to-crime-100 dark:from-crime-900 dark:to-crime-800 flex flex-col">
//       <main className="flex-grow flex items-center justify-center">
//         <div className="container px-4 py-8 md:py-16 flex flex-col lg:flex-row items-center mx-auto max-w-6xl">
//           {/* Hero Section */}
//           <div className="animate-fade-in text-center lg:text-left">
//             <div className="mb-6 inline-flex items-center py-1 px-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
//               <ShieldCheck className="w-4 h-4 mr-1.5" />
//               Crime Record Management System
//             </div>

//             <h1 className="text-4xl md:text-5xl font-bold text-crime-800 dark:text-white mb-4 leading-tight">
//               Modern crime recording for{" "}
//               <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//                 law enforcement
//               </span>
//             </h1>

//             <p className="text-lg text-crime-600 dark:text-crime-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
//               Transform how your agency manages crime data with our centralized
//               digital platform. Replace paper-based systems with efficient
//               digital workflows designed for law enforcement.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
//               {[
//                 {
//                   icon: UserCheck,
//                   title: "Role-Based Access",
//                   desc: "Tailored interfaces for officers, investigators, and administrators",
//                 },
//                 {
//                   icon: Search,
//                   title: "Advanced Search",
//                   desc: "Quickly find cases with powerful search and filtering",
//                 },
//                 {
//                   icon: ClipboardCheck,
//                   title: "Case Management",
//                   desc: "Track cases, update progress, and assign officers",
//                 },
//                 {
//                   icon: BarChart3,
//                   title: "Analytics",
//                   desc: "Generate insights with crime statistics and trends",
//                 },
//               ].map((feature, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start p-4 bg-white dark:bg-crime-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="mt-1 mr-3 p-2 rounded-lg bg-primary/10 text-primary">
//                     <feature.icon className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-crime-800 dark:text-white">
//                       {feature.title}
//                     </h3>
//                     <p className="text-sm text-crime-500 dark:text-crime-400">
//                       {feature.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex justify-center lg:justify-start my-8">
//               <Button
//                 asChild
//                 size="lg"
//                 className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white transition-all duration-300 transform hover:scale-105"
//               >
//                 <NavLink to="/auth">Get Started</NavLink>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default LandingPage;
import { Button } from "@/components/ui/button";
import {
  UserCheck,
  Search,
  ClipboardCheck,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
      <main className="flex-grow flex items-center justify-center">
        <div className="container px-4 py-8 md:py-16 flex flex-col lg:flex-row items-center mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="animate-fade-in text-center lg:text-left">
            <div className="mb-6 inline-flex items-center py-1 px-3 text-sm font-medium rounded-full bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-200">
              <ShieldCheck className="w-4 h-4 mr-1.5" />
              Crime Record Management System
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
              Modern crime recording for{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                law enforcement
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transform how your agency manages crime data with our centralized
              digital platform. Replace paper-based systems with efficient
              digital workflows designed for law enforcement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: UserCheck,
                  title: "Role-Based Access",
                  desc: "Tailored interfaces for officers, investigators, and administrators",
                },
                {
                  icon: Search,
                  title: "Advanced Search",
                  desc: "Quickly find cases with powerful search and filtering",
                },
                {
                  icon: ClipboardCheck,
                  title: "Case Management",
                  desc: "Track cases, update progress, and assign officers",
                },
                {
                  icon: BarChart3,
                  title: "Analytics",
                  desc: "Generate insights with crime statistics and trends",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mt-1 mr-3 p-2 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-200">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start my-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105"
              >
                <NavLink to="/auth">Get Started</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            © 2023 Crime Record Management System | Proof of Concept |{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-500 transition-colors"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
