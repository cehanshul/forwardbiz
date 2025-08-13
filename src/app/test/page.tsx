// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import {
//   Menu,
//   X,
//   Filter,
//   User,
//   LogOut,
//   MessageSquare,
//   Search,
//   ChevronDown,
//   Heart,
//   Share2,
//   MapPin,
//   Compass,
//   Zap,
//   Globe,
//   Bell,
//   Settings,
//   Info,
//   Moon,
//   Sun,
// } from "lucide-react";

// export default function WanderTribe() {
//   // State management
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegister, setShowRegister] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [travelers, setTravelers] = useState([]);
//   const [selectedTraveler, setSelectedTraveler] = useState(null);
//   const [filters, setFilters] = useState({
//     gender: "all",
//     ageRange: [18, 65],
//     interests: [],
//     duration: "all",
//   });
//   const [showFilters, setShowFilters] = useState(false);
//   const [mapCenter, setMapCenter] = useState([78.9629, 20.5937]); // India center
//   const [mapZoom, setMapZoom] = useState(5);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [mapStyle, setMapStyle] = useState("streets");
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [registerName, setRegisterName] = useState("");
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [registerLocation, setRegisterLocation] = useState("");
//   const [mapLoaded, setMapLoaded] = useState(false);
//   const [showWelcome, setShowWelcome] = useState(true);
//   const [mapInstance, setMapInstance] = useState(null);
//   const mapContainer = useRef(null);

//   // Major cities in India with coordinates
//   const majorCities = [
//     { name: "New Delhi", coordinates: [77.209, 28.6139], state: "Delhi" },
//     { name: "Mumbai", coordinates: [72.8777, 19.076], state: "Maharashtra" },
//     { name: "Bangalore", coordinates: [77.5946, 12.9716], state: "Karnataka" },
//     { name: "Chennai", coordinates: [80.2707, 13.0827], state: "Tamil Nadu" },
//     { name: "Kolkata", coordinates: [88.3639, 22.5726], state: "West Bengal" },
//     { name: "Hyderabad", coordinates: [78.4867, 17.385], state: "Telangana" },
//     { name: "Pune", coordinates: [73.8567, 18.5204], state: "Maharashtra" },
//     { name: "Jaipur", coordinates: [75.7873, 26.9124], state: "Rajasthan" },
//     { name: "Ahmedabad", coordinates: [72.5714, 23.0225], state: "Gujarat" },
//     { name: "Kochi", coordinates: [76.2673, 9.9312], state: "Kerala" },
//     { name: "Goa", coordinates: [74.124, 15.2993], state: "Goa" },
//     {
//       name: "Varanasi",
//       coordinates: [83.0066, 25.3176],
//       state: "Uttar Pradesh",
//     },
//     { name: "Amritsar", coordinates: [74.8723, 31.634], state: "Punjab" },
//     {
//       name: "Shimla",
//       coordinates: [77.1734, 31.1048],
//       state: "Himachal Pradesh",
//     },
//     {
//       name: "Rishikesh",
//       coordinates: [78.2676, 30.0869],
//       state: "Uttarakhand",
//     },
//     {
//       name: "Darjeeling",
//       coordinates: [88.2636, 27.041],
//       state: "West Bengal",
//     },
//     { name: "Agra", coordinates: [78.0081, 27.1767], state: "Uttar Pradesh" },
//     {
//       name: "Lucknow",
//       coordinates: [80.9462, 26.8467],
//       state: "Uttar Pradesh",
//     },
//     { name: "Udaipur", coordinates: [73.7125, 24.5854], state: "Rajasthan" },
//     { name: "Mysore", coordinates: [76.6394, 12.2958], state: "Karnataka" },
//   ];

//   // Interests for travelers
//   const interestOptions = [
//     "Hiking",
//     "Photography",
//     "Food",
//     "Culture",
//     "History",
//     "Adventure",
//     "Nature",
//     "Spirituality",
//     "Architecture",
//     "Beach",
//     "Mountains",
//     "Nightlife",
//     "Music",
//     "Art",
//     "Wildlife",
//   ];

//   // Map style options
//   const mapStyles = [
//     {
//       id: "streets",
//       name: "Streets",
//       url: "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_key",
//     },
//     {
//       id: "outdoors",
//       name: "Outdoors",
//       url: "https://api.maptiler.com/maps/outdoor/style.json?key=get_your_own_key",
//     },
//     {
//       id: "satellite",
//       name: "Satellite",
//       url: "https://api.maptiler.com/maps/hybrid/style.json?key=get_your_own_key",
//     },
//     {
//       id: "dark",
//       name: "Dark",
//       url: "https://api.maptiler.com/maps/darkmatter/style.json?key=get_your_own_key",
//     },
//   ];

//   // Initialize map when component mounts
//   useEffect(() => {
//     if (mapContainer.current && !mapInstance) {
//       // We need to load MapLibre GL JS or similar mapping library
//       // For demonstration purposes, let's simulate the map loading
//       const loadMap = async () => {
//         // Simulate map loading delay
//         await new Promise((resolve) => setTimeout(resolve, 1000));

//         // In a real implementation, we would do something like:
//         // const map = new maplibregl.Map({
//         //   container: mapContainer.current,
//         //   style: mapStyles.find(style => style.id === mapStyle).url,
//         //   center: mapCenter,
//         //   zoom: mapZoom
//         // });

//         // Set map loaded state and store map instance
//         setMapLoaded(true);
//         setMapInstance({});
//         console.log("Map loaded");
//       };

//       loadMap();
//     }
//   }, [mapContainer]);

//   // Generate sample travelers
//   useEffect(() => {
//     const sampleTravelers = Array(50)
//       .fill()
//       .map((_, i) => {
//         const randomCity =
//           majorCities[Math.floor(Math.random() * majorCities.length)];
//         // Add some randomness to positions so travelers aren't all stacked
//         const coordinates = [
//           randomCity.coordinates[0] + (Math.random() * 0.1 - 0.05),
//           randomCity.coordinates[1] + (Math.random() * 0.1 - 0.05),
//         ];

//         return {
//           id: i + 1,
//           name: `Traveler ${i + 1}`,
//           age: 20 + Math.floor(Math.random() * 40),
//           gender: Math.random() > 0.5 ? "Male" : "Female",
//           location: {
//             city: randomCity.name,
//             state: randomCity.state,
//             coordinates,
//           },
//           interests: Array(1 + Math.floor(Math.random() * 5))
//             .fill()
//             .map(
//               () =>
//                 interestOptions[
//                   Math.floor(Math.random() * interestOptions.length)
//                 ]
//             ),
//           duration: ["1-7 days", "1-4 weeks", "1-3 months", "3+ months"][
//             Math.floor(Math.random() * 4)
//           ],
//           bio: `I'm a passionate traveler exploring the beauty of India. Currently in ${randomCity.name}.`,
//           profileImage: `https://i.pravatar.cc/150?img=${i % 70}`, // Placeholder avatar
//           joinedDate: new Date(
//             Date.now() - Math.random() * 10000000000
//           ).toLocaleDateString(),
//           status: ["Active", "Away", "Busy"][Math.floor(Math.random() * 3)],
//           lastActive: ["Just now", "5m ago", "1h ago", "Today"][
//             Math.floor(Math.random() * 4)
//           ],
//         };
//       });

//     setTravelers(sampleTravelers);

//     // Create a sample user
//     const sampleUser = {
//       id: 0,
//       name: "You",
//       age: 28,
//       gender: "Non-binary",
//       location: {
//         city: "Bangalore",
//         state: "Karnataka",
//         coordinates: [77.5946, 12.9716],
//       },
//       interests: ["Photography", "Food", "Hiking", "Culture"],
//       duration: "1-4 weeks",
//       bio: "Adventure seeker looking to connect with fellow travelers in India!",
//       profileImage: "https://i.pravatar.cc/150?img=33",
//       joinedDate: new Date().toLocaleDateString(),
//       status: "Active",
//     };
//     setCurrentUser(sampleUser);

//     // Sample notifications
//     setNotifications([
//       {
//         id: 1,
//         type: "message",
//         from: "Traveler 3",
//         content: "Hey! Are you in Bangalore right now?",
//         time: "2 hours ago",
//       },
//       {
//         id: 2,
//         type: "nearby",
//         from: "Traveler 12",
//         content: "New traveler nearby",
//         time: "5 hours ago",
//       },
//       {
//         id: 3,
//         type: "system",
//         content: "Welcome to WanderTribe! Find your travel companions.",
//         time: "1 day ago",
//       },
//     ]);
//   }, []);

//   // Filter travelers based on criteria
//   const filteredTravelers = travelers.filter((traveler) => {
//     // Filter by search term
//     if (
//       searchTerm &&
//       !traveler.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       !traveler.location.city.toLowerCase().includes(searchTerm.toLowerCase())
//     ) {
//       return false;
//     }

//     // Filter by gender
//     if (
//       filters.gender !== "all" &&
//       traveler.gender.toLowerCase() !== filters.gender.toLowerCase()
//     ) {
//       return false;
//     }

//     // Filter by age
//     if (
//       traveler.age < filters.ageRange[0] ||
//       traveler.age > filters.ageRange[1]
//     ) {
//       return false;
//     }

//     // Filter by interests
//     if (
//       filters.interests.length > 0 &&
//       !traveler.interests.some((i) => filters.interests.includes(i))
//     ) {
//       return false;
//     }

//     // Filter by duration
//     if (filters.duration !== "all" && traveler.duration !== filters.duration) {
//       return false;
//     }

//     return true;
//   });

//   // Mock login function
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     setShowLogin(false);
//     setShowWelcome(false);
//   };

//   // Mock register function
//   const handleRegister = () => {
//     setIsLoggedIn(true);
//     setShowRegister(false);
//     setShowWelcome(false);
//   };

//   // Function to fly to a traveler on the map
//   const flyToTraveler = (traveler) => {
//     setMapCenter(traveler.location.coordinates);
//     setMapZoom(12);
//     setSelectedTraveler(traveler);
//   };

//   // Components
//   const LoginModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//       <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full shadow-2xl transform transition-all">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
//             Login
//           </h2>
//           <button
//             onClick={() => setShowLogin(false)}
//             className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//           >
//             <X size={24} />
//           </button>
//         </div>
//         <div>
//           <div className="mb-4">
//             <label className="block text-gray-700 dark:text-gray-300 mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//               value={loginEmail}
//               onChange={(e) => setLoginEmail(e.target.value)}
//               placeholder="your@email.com"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 dark:text-gray-300 mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//               value={loginPassword}
//               onChange={(e) => setLoginPassword(e.target.value)}
//               placeholder="••••••••"
//             />
//           </div>
//           <button
//             onClick={handleLogin}
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
//           >
//             Login
//           </button>
//         </div>
//         <div className="mt-6 text-center">
//           <p className="text-gray-600 dark:text-gray-400">
//             Don't have an account?{" "}
//             <button
//               onClick={() => {
//                 setShowLogin(false);
//                 setShowRegister(true);
//               }}
//               className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
//             >
//               Register
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );

//   const RegisterModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//       <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full shadow-2xl transform transition-all">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
//             Create Account
//           </h2>
//           <button
//             onClick={() => setShowRegister(false)}
//             className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//           >
//             <X size={24} />
//           </button>
//         </div>
//         <div>
//           <div className="mb-4">
//             <label className="block text-gray-700 dark:text-gray-300 mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//               value={registerName}
//               onChange={(e) => setRegisterName(e.target.value)}
//               placeholder="Your Name"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 dark:text-gray-300 mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//               value={registerEmail}
//               onChange={(e) => setRegisterEmail(e.target.value)}
//               placeholder="your@email.com"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 dark:text-gray-300 mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//               value={registerPassword}
//               onChange={(e) => setRegisterPassword(e.target.value)}
//               placeholder="Choose a strong password"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 dark:text-gray-300 mb-2">
//               Current Location
//             </label>
//             <select
//               className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//               value={registerLocation}
//               onChange={(e) => setRegisterLocation(e.target.value)}
//             >
//               <option value="">Select a city</option>
//               {majorCities.map((city) => (
//                 <option key={city.name} value={city.name}>
//                   {city.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             onClick={handleRegister}
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
//           >
//             Create Account
//           </button>
//         </div>
//         <div className="mt-6 text-center">
//           <p className="text-gray-600 dark:text-gray-400">
//             Already have an account?{" "}
//             <button
//               onClick={() => {
//                 setShowRegister(false);
//                 setShowLogin(true);
//               }}
//               className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
//             >
//               Login
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );

//   const TravelerProfile = ({ traveler }) => {
//     if (!traveler) return null;

//     return (
//       <div className="absolute right-4 top-20 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-5 w-80 z-30 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 border border-gray-200 dark:border-gray-700">
//         <div className="flex justify-between items-start">
//           <div className="flex items-center">
//             <div className="relative">
//               <img
//                 src={traveler.profileImage}
//                 alt={traveler.name}
//                 className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
//               />
//               <div
//                 className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
//                   traveler.status === "Active"
//                     ? "bg-green-500"
//                     : traveler.status === "Away"
//                     ? "bg-yellow-500"
//                     : "bg-gray-500"
//                 }`}
//               ></div>
//             </div>
//             <div className="ml-3">
//               <h3 className="font-bold text-lg text-gray-800 dark:text-white">
//                 {traveler.name}
//               </h3>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 {traveler.age}, {traveler.gender}
//               </p>
//               <p className="text-xs text-indigo-600 dark:text-indigo-400">
//                 Active {traveler.lastActive}
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={() => setSelectedTraveler(null)}
//             className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         <div className="mt-4">
//           <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
//             {traveler.bio}
//           </p>

//           <div className="flex items-center mb-3">
//             <MapPin size={16} className="text-indigo-500 mr-1" />
//             <p className="text-gray-700 dark:text-gray-300 text-sm">
//               {traveler.location.city}, {traveler.location.state}
//             </p>
//           </div>

//           <div className="flex items-center mb-3">
//             <Calendar size={16} className="text-indigo-500 mr-1" />
//             <p className="text-gray-700 dark:text-gray-300 text-sm">
//               {traveler.duration}
//             </p>
//           </div>

//           <div className="mb-4">
//             <p className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-2">
//               Interests
//             </p>
//             <div className="flex flex-wrap gap-1 mt-1">
//               {traveler.interests.map((interest) => (
//                 <span
//                   key={interest}
//                   className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-1 rounded-full"
//                 >
//                   {interest}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="mb-3 flex items-center text-sm">
//             <Calendar size={16} className="text-indigo-500 mr-1" />
//             <p className="text-gray-600 dark:text-gray-400">
//               Joined {traveler.joinedDate}
//             </p>
//           </div>
//         </div>

//         <div className="mt-4 flex gap-2">
//           <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition duration-200 flex items-center justify-center">
//             <MessageSquare size={16} className="mr-1" /> Message
//           </button>
//           <button className="flex-1 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-indigo-600 dark:text-indigo-400 border border-indigo-500 py-2 rounded-lg transition duration-200 flex items-center justify-center">
//             <Heart size={16} className="mr-1" /> Connect
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const FilterPanel = () => (
//     <div className="absolute left-4 top-20 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-5 w-80 z-30 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 border border-gray-200 dark:border-gray-700">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="font-bold text-lg text-gray-800 dark:text-white">
//           Filters
//         </h3>
//         <button
//           onClick={() => setShowFilters(false)}
//           className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
//         >
//           <X size={20} />
//         </button>
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
//           Gender
//         </label>
//         <select
//           className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//           value={filters.gender}
//           onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
//         >
//           <option value="all">All</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="non-binary">Non-binary</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
//           Age Range
//         </label>
//         <div className="flex items-center gap-2">
//           <input
//             type="number"
//             min="18"
//             max="80"
//             className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//             value={filters.ageRange[0]}
//             onChange={(e) =>
//               setFilters({
//                 ...filters,
//                 ageRange: [parseInt(e.target.value), filters.ageRange[1]],
//               })
//             }
//           />
//           <span className="text-gray-700 dark:text-gray-300">to</span>
//           <input
//             type="number"
//             min="18"
//             max="80"
//             className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//             value={filters.ageRange[1]}
//             onChange={(e) =>
//               setFilters({
//                 ...filters,
//                 ageRange: [filters.ageRange[0], parseInt(e.target.value)],
//               })
//             }
//           />
//         </div>
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
//           Interests
//         </label>
//         <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
//           {interestOptions.map((interest) => (
//             <button
//               key={interest}
//               className={`text-xs px-2 py-1 rounded-full transition-all duration-200 ${
//                 filters.interests.includes(interest)
//                   ? "bg-indigo-600 text-white"
//                   : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
//               }`}
//               onClick={() => {
//                 if (filters.interests.includes(interest)) {
//                   setFilters({
//                     ...filters,
//                     interests: filters.interests.filter((i) => i !== interest),
//                   });
//                 } else {
//                   setFilters({
//                     ...filters,
//                     interests: [...filters.interests, interest],
//                   });
//                 }
//               }}
//             >
//               {interest}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="mb-6">
//         <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
//           Travel Duration
//         </label>
//         <select
//           className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//           value={filters.duration}
//           onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
//         >
//           <option value="all">All</option>
//           <option value="1-7 days">1-7 days</option>
//           <option value="1-4 weeks">1-4 weeks</option>
//           <option value="1-3 months">1-3 months</option>
//           <option value="3+ months">3+ months</option>
//         </select>
//       </div>

//       <div className="flex justify-between">
//         <button
//           className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-300 px-4 py-2 rounded-lg transition duration-200"
//           onClick={() =>
//             setFilters({
//               gender: "all",
//               ageRange: [18, 65],
//               interests: [],
//               duration: "all",
//             })
//           }
//         >
//           Reset
//         </button>
//         <button
//           className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition duration-200"
//           onClick={() => setShowFilters(false)}
//         >
//           Apply
//         </button>
//       </div>
//     </div>
//   );

//   const NotificationsPanel = () => (
//     <div className="absolute right-4 top-20 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-5 w-80 z-30 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 border border-gray-200 dark:border-gray-700">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="font-bold text-lg text-gray-800 dark:text-white">
//           Notifications
//         </h3>
//         <button
//           onClick={() => setShowNotifications(false)}
//           className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
//         >
//           <X size={20} />
//         </button>
//       </div>

//       {notifications.length > 0 ? (
//         <div className="max-h-96 overflow-y-auto">
//           {notifications.map((notification) => (
//             <div
//               key={notification.id}
//               className="p-3 mb-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
//             >
//               {notification.type === "message" && (
//                 <div>
//                   <div className="flex justify-between">
//                     <span className="font-medium text-gray-800 dark:text-white">
//                       {notification.from}
//                     </span>
//                     <span className="text-xs text-gray-500 dark:text-gray-400">
//                       {notification.time}
//                     </span>
//                   </div>
//                   <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
//                     {notification.content}
//                   </p>
//                 </div>
//               )}

//               {notification.type === "nearby" && (
//                 <div>
//                   <div className="flex justify-between">
//                     <span className="font-medium text-gray-800 dark:text-white">
//                       {notification.from}
//                     </span>
//                     <span className="text-xs text-gray-500 dark:text-gray-400">
//                       {notification.time}
//                     </span>
//                   </div>
//                   <p className="text-gray-700 dark:text-gray-300 text-sm mt-1 flex items-center">
//                     <MapPin size={14} className="text-indigo-500 mr-1" />
//                     {notification.content}
//                   </p>
//                 </div>
//               )}

//               {notification.type === "system" && (
//                 <div>
//                   <div className="flex justify-between">
//                     <span className="font-medium text-gray-800 dark:text-white">
//                       WanderTribe
//                     </span>
//                     <span className="text-xs text-gray-500 dark:text-gray-400">
//                       {notification.time}
//                     </span>
//                   </div>
//                   <p className="text-gray-700 dark:text-gray-300 text-sm mt-1 flex items-center">
//                     <Info size={14} className="text-indigo-500 mr-1" />
//                     {notification.content}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="py-6 text-center">
//           <p className="text-gray-500 dark:text-gray-400">
//             No notifications yet
//           </p>
//         </div>
//       )}
//     </div>
//   );

//   const TravelersList = () => (
//     <div className="absolute right-4 top-20 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-5 w-80 z-30 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 border border-gray-200 dark:border-gray-700">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="font-bold text-lg text-gray-800 dark:text-white">
//           Nearby Travelers
//         </h3>
//         <span className="text-gray-600 dark:text-gray-400 text-sm">
//           {filteredTravelers.length} found
//         </span>
//       </div>

//       {filteredTravelers.length > 0 ? (
//         <div className="max-h-96 overflow-y-auto">
//           {filteredTravelers.slice(0, 10).map((traveler) => (
//             <div
//               key={traveler.id}
//               className="flex items-center p-3 mb-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
//               onClick={() => flyToTraveler(traveler)}
//             >
//               <div className="relative">
//                 <img
//                   src={traveler.profileImage}
//                   alt={traveler.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div
//                   className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
//                     traveler.status === "Active"
//                       ? "bg-green-500"
//                       : traveler.status === "Away"
//                       ? "bg-yellow-500"
//                       : "bg-gray-500"
//                   }`}
//                 ></div>
//               </div>

//               <div className="ml-3 flex-1">
//                 <div className="flex justify-between">
//                   <span className="font-medium text-gray-800 dark:text-white">
//                     {traveler.name}
//                   </span>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">
//                     {traveler.lastActive}
//                   </span>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
//                   <MapPin size={12} className="mr-1 text-indigo-500" />
//                   {traveler.location.city}
//                 </div>
//               </div>
//             </div>
//           ))}

//           {filteredTravelers.length > 10 && (
//             <div className="text-center pt-2 pb-1">
//               <button className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline">
//                 View all {filteredTravelers.length} travelers
//               </button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="py-6 text-center">
//           <p className="text-gray-500 dark:text-gray-400">
//             No travelers found matching your filters
//           </p>
//         </div>
//       )}
//     </div>
//   );

//   const WelcomeOverlay = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//       <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-lg w-full shadow-2xl">
//         <div className="text-center mb-6">
//           <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
//             WanderTribe
//           </h1>
//           <p className="text-xl text-gray-700 dark:text-gray-300">
//             Connect with solo travelers across India
//           </p>
//         </div>

//         <div className="mb-8 text-gray-600 dark:text-gray-400">
//           <p className="mb-4">
//             Welcome to a new way of discovering fellow adventurers! WanderTribe
//             lets you:
//           </p>
//           <ul className="space-y-2">
//             <li className="flex items-start">
//               <Compass className="text-indigo-500 mr-2 h-5 w-5 mt-0.5" />
//               <span>Discover travelers on a beautiful interactive map</span>
//             </li>
//             <li className="flex items-start">
//               <MessageSquare className="text-indigo-500 mr-2 h-5 w-5 mt-0.5" />
//               <span>Connect with like-minded explorers</span>
//             </li>
//             <li className="flex items-start">
//               <MapPin className="text-indigo-500 mr-2 h-5 w-5 mt-0.5" />
//               <span>Find travel companions for your next adventure</span>
//             </li>
//           </ul>
//         </div>

//         <div className="flex gap-4">
//           <button
//             className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
//             onClick={() => setShowRegister(true)}
//           >
//             Sign Up
//           </button>
//           <button
//             className="flex-1 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-indigo-600 dark:text-indigo-400 border border-indigo-500 py-3 px-4 rounded-lg font-medium transition duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
//             onClick={() => setShowLogin(true)}
//           >
//             Login
//           </button>
//         </div>

//         <div className="mt-6 text-center">
//           <button
//             className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm"
//             onClick={() => setShowWelcome(false)}
//           >
//             Explore as guest
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   // Since we can't use a real map in this environment, let's create a simulated map view
//   const SimulatedMap = () => (
//     <div
//       className={`absolute inset-0 ${
//         isDarkMode ? "bg-gray-900" : "bg-blue-50"
//       } overflow-hidden`}
//       ref={mapContainer}
//     >
//       {/* Simulated map tiles in a grid pattern */}
//       <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20">
//         {Array.from({ length: 144 }).map((_, i) => (
//           <div
//             key={i}
//             className="border border-gray-400 dark:border-gray-600"
//           ></div>
//         ))}
//       </div>

//       {/* Simulated terrain */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 1000 1000"
//           className="opacity-30"
//         >
//           {/* Simulated landmass for India */}
//           <path
//             d="M400,200 C500,150 600,200 650,300 C700,400 750,500 700,600 C650,700 550,750 450,700 C350,650 300,550 350,450 C375,375 350,300 400,200 Z"
//             fill={isDarkMode ? "#4f46e5" : "#4f46e5"}
//             fillOpacity="0.2"
//             stroke={isDarkMode ? "#818cf8" : "#4f46e5"}
//             strokeWidth="2"
//           />

//           {/* Simulated terrain features */}
//           <path
//             d="M450,300 C500,280 550,300 575,350 C600,400 590,450 550,475 C510,500 470,490 450,450 C430,410 420,320 450,300 Z"
//             fill={isDarkMode ? "#16a34a" : "#22c55e"}
//             fillOpacity="0.3"
//             stroke={isDarkMode ? "#22c55e" : "#16a34a"}
//             strokeWidth="1"
//           />

//           <path
//             d="M600,450 C650,430 680,450 690,500 C700,550 680,580 650,590 C620,600 590,580 580,550 C570,520 550,470 600,450 Z"
//             fill={isDarkMode ? "#ca8a04" : "#eab308"}
//             fillOpacity="0.3"
//             stroke={isDarkMode ? "#eab308" : "#ca8a04"}
//             strokeWidth="1"
//           />

//           {/* Simulated water bodies */}
//           <path
//             d="M300,500 C350,480 400,500 420,550 C440,600 420,650 380,670 C340,690 290,670 270,630 C250,590 250,520 300,500 Z"
//             fill={isDarkMode ? "#0ea5e9" : "#38bdf8"}
//             fillOpacity="0.4"
//             stroke={isDarkMode ? "#38bdf8" : "#0ea5e9"}
//             strokeWidth="1"
//           />
//         </svg>
//       </div>

//       {/* Grid coordinates as a hint this is a map view */}
//       <div className="absolute bottom-10 left-10 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 rounded-lg px-3 py-2 text-xs text-gray-700 dark:text-gray-300 font-mono">
//         Lat: {(Math.round(mapCenter[1] * 1000) / 1000).toFixed(3)} | Lng:{" "}
//         {(Math.round(mapCenter[0] * 1000) / 1000).toFixed(3)} | Zoom:{" "}
//         {mapZoom.toFixed(1)}
//       </div>

//       {/* Map style switcher */}
//       <div className="absolute bottom-10 right-10 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 rounded-lg shadow-lg">
//         <div className="p-2 flex space-x-1">
//           {["streets", "outdoors", "satellite", "dark"].map((style) => (
//             <button
//               key={style}
//               className={`w-8 h-8 rounded ${
//                 mapStyle === style ? "ring-2 ring-indigo-500" : ""
//               }`}
//               onClick={() => setMapStyle(style)}
//               style={{
//                 backgroundColor:
//                   style === "streets"
//                     ? "#e2e8f0"
//                     : style === "outdoors"
//                     ? "#d1fae5"
//                     : style === "satellite"
//                     ? "#1e293b"
//                     : "#1e1e1e",
//               }}
//               title={style.charAt(0).toUpperCase() + style.slice(1)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Traveler markers - these would actually be added to the map via the mapping library */}
//       {/* For our simulation, we'll just add them as absolutely positioned elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         {filteredTravelers.map((traveler) => {
//           // Convert lat/lng to pixel positions (this is a simplified approximation)
//           // In a real implementation, these would be positioned by the mapping library
//           const pixelX =
//             ((traveler.location.coordinates[0] - 65) / 35) * 100 + "%";
//           const pixelY =
//             (1 - (traveler.location.coordinates[1] - 8) / 30) * 100 + "%";

//           return (
//             <div
//               key={traveler.id}
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-auto"
//               style={{ left: pixelX, top: pixelY }}
//               onClick={() => setSelectedTraveler(traveler)}
//             >
//               <div className="relative group">
//                 <div className="absolute -inset-2 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//                 <div
//                   className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 ${
//                     selectedTraveler?.id === traveler.id
//                       ? "border-indigo-500 shadow-lg shadow-indigo-500/20"
//                       : "border-white shadow-md"
//                   } transition-all duration-300 group-hover:scale-110`}
//                 >
//                   <img
//                     src={traveler.profileImage}
//                     alt={traveler.name}
//                     className="w-full h-full rounded-full object-cover"
//                   />
//                   <div
//                     className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
//                       traveler.status === "Active"
//                         ? "bg-green-500"
//                         : traveler.status === "Away"
//                         ? "bg-yellow-500"
//                         : "bg-gray-500"
//                     }`}
//                   ></div>
//                 </div>

//                 <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-2 py-1 rounded text-xs font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//                   {traveler.name}
//                 </div>
//               </div>
//             </div>
//           );
//         })}

//         {/* Current user marker */}
//         {isLoggedIn && currentUser && (
//           <div
//             className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer pointer-events-auto"
//             style={{
//               left:
//                 ((currentUser.location.coordinates[0] - 65) / 35) * 100 + "%",
//               top:
//                 (1 - (currentUser.location.coordinates[1] - 8) / 30) * 100 +
//                 "%",
//             }}
//           >
//             <div className="relative">
//               <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
//               <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-3 border-green-500 shadow-lg shadow-green-500/30 bg-white dark:bg-gray-800">
//                 <img
//                   src={currentUser.profileImage}
//                   alt="You"
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//               </div>
//               <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 px-3 py-1 rounded-full text-xs font-medium text-white shadow-md">
//                 You
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   // Creates realistic appearance of a map loading
//   const MapLoadingPlaceholder = () => (
//     <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center">
//       <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
//       <p className="text-gray-600 dark:text-gray-400">Loading map...</p>
//     </div>
//   );

//   return (
//     <div
//       className={`relative w-full h-screen overflow-hidden ${
//         isDarkMode ? "dark" : ""
//       }`}
//     >
//       {/* Map Component */}
//       <div className="absolute inset-0">
//         {mapLoaded ? <SimulatedMap /> : <MapLoadingPlaceholder />}
//       </div>

//       {/* Header */}
//       <header className="absolute top-0 left-0 right-0 z-40 flex justify-between items-center px-6 py-4">
//         <div className="flex items-center">
//           <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mr-2">
//             WanderTribe
//           </h1>
//         </div>

//         {/* Search Bar */}
//         <div className="relative w-1/3 max-w-md">
//           <input
//             type="text"
//             placeholder="Search travelers or places..."
//             className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <Search size={18} className="absolute left-3 top-3 text-gray-400" />
//         </div>

//         <div className="flex items-center space-x-3">
//           <button
//             className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-opacity-100 dark:hover:bg-opacity-100 transition shadow-sm"
//             onClick={() => setShowFilters(!showFilters)}
//             title="Filters"
//           >
//             <Filter size={20} />
//           </button>

//           <button
//             className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-opacity-100 dark:hover:bg-opacity-100 transition shadow-sm"
//             onClick={() => setIsDarkMode(!isDarkMode)}
//             title={isDarkMode ? "Light mode" : "Dark mode"}
//           >
//             {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
//           </button>

//           {isLoggedIn ? (
//             <>
//               <div className="relative">
//                 <button
//                   className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-opacity-100 dark:hover:bg-opacity-100 transition shadow-sm"
//                   onClick={() => setShowNotifications(!showNotifications)}
//                   title="Notifications"
//                 >
//                   <div className="relative">
//                     <Bell size={20} />
//                     {notifications.length > 0 && (
//                       <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//                         {notifications.length}
//                       </span>
//                     )}
//                   </div>
//                 </button>
//                 {showNotifications && <NotificationsPanel />}
//               </div>

//               <div className="relative">
//                 <button
//                   className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm hover:ring-2 hover:ring-indigo-500 transition shadow-sm"
//                   onClick={() => setMenuOpen(!menuOpen)}
//                   title="Your profile"
//                 >
//                   <img
//                     src={currentUser?.profileImage}
//                     alt="Profile"
//                     className="w-10 h-10 object-cover"
//                   />
//                 </button>

//                 {menuOpen && (
//                   <div className="absolute top-12 right-0 bg-white dark:bg-gray-800 rounded-xl shadow-xl py-2 w-48 z-50 border border-gray-200 dark:border-gray-700">
//                     <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
//                       <p className="font-medium text-gray-800 dark:text-white">
//                         {currentUser?.name}
//                       </p>
//                       <p className="text-xs text-gray-500 dark:text-gray-400">
//                         {currentUser?.location.city}
//                       </p>
//                     </div>
//                     <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center">
//                       <User size={16} className="mr-2 text-indigo-500" />{" "}
//                       Profile
//                     </button>
//                     <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center">
//                       <MessageSquare
//                         size={16}
//                         className="mr-2 text-indigo-500"
//                       />{" "}
//                       Messages
//                     </button>
//                     <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center">
//                       <Settings size={16} className="mr-2 text-indigo-500" />{" "}
//                       Settings
//                     </button>
//                     <div className="border-t border-gray-200 dark:border-gray-700 mt-1"></div>
//                     <button
//                       className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600 flex items-center"
//                       onClick={() => setIsLoggedIn(false)}
//                     >
//                       <LogOut size={16} className="mr-2" /> Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </>
//           ) : (
//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={() => setShowLogin(true)}
//                 className="px-4 py-2 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 rounded-lg bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm hover:bg-opacity-100 dark:hover:bg-opacity-100 transition shadow-sm"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => setShowRegister(true)}
//                 className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition shadow-sm"
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Floating Action Button for travelers list */}
//       <button
//         className="absolute bottom-6 right-6 z-30 bg-indigo-600 hover:bg-indigo-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-110 hover:rotate-12"
//         onClick={() => setSelectedTraveler(null)}
//         title="View travelers list"
//       >
//         <Globe size={24} />
//       </button>

//       {/* Traveler Profile */}
//       {selectedTraveler && <TravelerProfile traveler={selectedTraveler} />}

//       {/* Filter Panel */}
//       {showFilters && <FilterPanel />}

//       {/* Travelers List - Show when no traveler is selected */}
//       {!selectedTraveler && <TravelersList />}

//       {/* Login/Register Modals */}
//       {showLogin && <LoginModal />}
//       {showRegister && <RegisterModal />}

//       {/* Welcome Overlay - Show on first visit */}
//       {showWelcome && <WelcomeOverlay />}

//       {/* Floating tooltip at the bottom */}
//       <div className="absolute left-6 bottom-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 z-20 max-w-xs bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
//         <h3 className="font-bold text-lg text-indigo-600 dark:text-indigo-400 mb-1 flex items-center">
//           <Compass className="mr-2 h-5 w-5" /> Exploring India
//         </h3>
//         <p className="text-gray-700 dark:text-gray-300 text-sm">
//           Discover {filteredTravelers.length} solo travelers across India.
//           Connect with fellow adventurers and make your journey more memorable.
//         </p>
//         <div className="mt-3 flex items-center text-xs text-gray-500 dark:text-gray-400">
//           <div className="flex items-center mr-3">
//             <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
//             <span>You</span>
//           </div>
//           <div className="flex items-center">
//             <div className="w-3 h-3 rounded-full bg-indigo-500 mr-1"></div>
//             <span>Other Travelers</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Mock Calendar component since we don't have access to lucide-react's Calendar
// const Calendar = ({ size, className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
//     <line x1="16" y1="2" x2="16" y2="6"></line>
//     <line x1="8" y1="2" x2="8" y2="6"></line>
//     <line x1="3" y1="10" x2="21" y2="10"></line>
//   </svg>
// );
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
