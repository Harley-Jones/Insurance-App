package com.insuranceapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.ui.Modifier
import androidx.navigation.compose.rememberNavController
import com.insuranceapp.data.GamificationData
import com.insuranceapp.data.sampleModules
import com.insuranceapp.navigation.AppNavigation
import com.insuranceapp.ui.theme.InsuranceAppTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        setContent {
            InsuranceAppTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val navController = rememberNavController()

                    AppNavigation(
                        navController = navController,
                        gamificationData = GamificationData(
                            points = 1250,
                            level = 3,
                            streak = 7
                        ),
                        modules = sampleModules,
                        videoUrl = "https://youtu.be/WcHV0hVkfTM"  // 32-minute hero video
                        // Alternative: Use local file (place in app/src/main/res/raw/hero_video.mp4)
                        // videoUrl = "android.resource://$packageName/${R.raw.hero_video}"
                    )
                }
            }
        }
    }
}
