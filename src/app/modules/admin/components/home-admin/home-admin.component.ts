import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';


interface StatCard {
  title: string;
  value: string | number;
  icon: string;
  color: string;
}

interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  orders: number;
}

@Component({
  selector: 'app-home-admin',
  imports: [NgFor],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.scss'
})
export class HomeAdminComponent {
   constructor(private supabaseService: AuthService) {}
   
statCards: StatCard[] = [
    { title: "Total Users", value: 0, icon: "👥", color: "#3498db" },
    { title: "Active Users", value: 0, icon: "👤", color: "#2ecc71" },
    { title: "Revenue", value: "$0", icon: "💰", color: "#f39c12" },
    { title: "Orders", value: 0, icon: "📦", color: "#9b59b6" },
  ]

  recentUsers = [
    { username: "John Doe", email: "john@example.com", isActive: true, avatar: "https://images.pexels.com/photos/31995641/pexels-photo-31995641/free-photo-of-man-in-suit-and-cap-with-dreadlocks-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600" },
    {
      username: "Jane Smith",
      email: "jane@example.com",
      isActive: true,
      avatar: "https://images.pexels.com/photos/31995641/pexels-photo-31995641/free-photo-of-man-in-suit-and-cap-with-dreadlocks-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      username: "Bob Johnson",
      email: "bob@example.com",
      isActive: false,
      avatar: "https://images.pexels.com/photos/31995641/pexels-photo-31995641/free-photo-of-man-in-suit-and-cap-with-dreadlocks-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      username: "Alice Brown",
      email: "alice@example.com",
      isActive: true,
      avatar: "https://images.pexels.com/photos/31995641/pexels-photo-31995641/free-photo-of-man-in-suit-and-cap-with-dreadlocks-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]

   ngOnInit() {
    // Fetch dashboard stats
    this.supabaseService.getStats().then((stats) => {
      this.statCards[0].value = stats.totalUsers
      this.statCards[1].value = stats.activeUsers
      this.statCards[2].value = `$${stats.revenue.toLocaleString()}`
      this.statCards[3].value = stats.orders
    })

    // In a real app, you would fetch recent users from Supabase here
  }
}
